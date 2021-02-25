import { Module } from 'vuex';
import { EmailState } from './EmailState';
import { RootState } from '../RootState';
import { Email } from '../../1-data/typings/Email';
import { getEmail, updateEmailStatus } from '../../1-data/clients/email';
import { NotificationType } from '../../1-data/typings/Notification';

export const EmailModule: Module<EmailState, RootState> = {
    namespaced: true,
    state: new EmailState(),

    mutations: {
        SET_CURRENT(state: EmailState, email: Email): void {
            state.current = { ...email };
        },
    },

    getters: {
        exists({ current }: EmailState): boolean {
            return Boolean(current) && Boolean(current?.id);
        },

        content({ current }: EmailState): string {
            const content = current?.content || '';

            /**
             * forgive mother for I have sinned
             * don't do this EVER
             */
            return content
                .split(/\n/)
                .map((paragraph: string) => `<p>${paragraph}</p>`)
                .join('') || '';
        },
    },

    actions: {
        async load({ commit, dispatch }, id: string): Promise<void> {
            await dispatch('messaging/setLoading', true, { root: true });

            try {
                const email = await getEmail(id);
                commit('SET_CURRENT', email);
            } catch (error) {
                commit('SET_CURRENT', null);

                await dispatch('messaging/push', {
                    content: 'Something went wrong loading the email',
                    type: NotificationType.Danger,
                }, { root: true });
            } finally {
                await dispatch('messaging/setLoading', false, { root: true });
            }
        },

        async updateEmailStatus({ commit, dispatch }, { id, status }): Promise<void> {
            await dispatch('messaging/setLoading', true, { root: true });

            try {
                const email = await updateEmailStatus(id, status);
                commit('SET_CURRENT', email);

                await dispatch('emailList/loadAll', {}, { root: true });
                await dispatch('messaging/push', {
                    content: `Email "${email.subject}" updated`,
                    type: NotificationType.Success,
                }, { root: true });
            } catch (error) {
                commit('SET_CURRENT', null);

                await dispatch('messaging/push', {
                    content: 'Something went wrong updating the email',
                    type: NotificationType.Danger,
                }, { root: true });
            } finally {
                await dispatch('messaging/setLoading', false, { root: true });
            }
        },
    },
};
