import { Module } from 'vuex';
import { EmailListState } from './EmailListState';
import { RootState } from '../RootState';
import { EmailInfo, EmailStatus } from '../../1-data/typings/Email';
import { getEmails } from '../../1-data/clients/email';
import { NotificationType } from '../../1-data/typings/Notification';

export const EmailListModule: Module<EmailListState, RootState> = {
    namespaced: true,
    state: new EmailListState(),

    mutations: {
        SET_LIST(state: EmailListState, list: EmailInfo[]): void {
            state.list = [ ...list ];
        },

        SET_SPAM_ONLY(state: EmailListState, isSpamOnly: boolean): void {
            state.isSpamOnly = isSpamOnly;
        },
    },

    getters: {
        filteredList({ list, isSpamOnly }): EmailInfo[] {
            return list.filter((info: EmailInfo) => {
                if (isSpamOnly) {
                    return info.status === EmailStatus.SPAM;
                }

                return info.status !== EmailStatus.SPAM;
            })
        }
    },

    actions: {
        async loadAll({ commit, dispatch }): Promise<void> {
            await dispatch('messaging/setLoading', true, { root: true });

            try {
                const list = await getEmails();
                commit('SET_LIST', list);
            } catch (error) {
                await dispatch('messaging/push', {
                    content: 'Something went wrong loading emails',
                    type: NotificationType.Danger,
                }, { root: true });
            } finally {
                await dispatch('messaging/setLoading', false, { root: true });
            }
        },

        async setSpamOnly({ state, commit, dispatch }, isSpamOnly: boolean): Promise<void> {
            if (state.isSpamOnly === isSpamOnly) {
                return;
            }

            commit('SET_SPAM_ONLY', isSpamOnly);

            await dispatch('messaging/push', {
                content: isSpamOnly ? 'Showing only spam emails' : 'Showing only secure emails',
                type: NotificationType.Info,
            }, { root: true });
        }
    },
};
