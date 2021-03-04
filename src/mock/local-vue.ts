import { jest } from '@jest/globals';
import { createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router';
import Vuex, { StoreOptions } from 'vuex';
import { EmailListState } from '@05/2-connection/modules/EmailListState';
import { EmailState } from '@05/2-connection/modules/EmailState';
import { MessagingState } from '@05/2-connection/modules/MessagingState';
import { staticInfoArray, staticSingleEmail } from './email';
import merge from 'lodash/merge';

export const localVueWithRouter = createLocalVue();
localVueWithRouter.use(VueRouter);
localVueWithRouter.use(Vuex);

export const localVue = createLocalVue();
localVue.use(Vuex);

export const router = new VueRouter();

export const generateStoreContext = (customOptions: StoreOptions<unknown> = {}) => {
    const defaultOptions = {
        modules: {
            emailList: {
                namespaced: true,
                state: new EmailListState,
                getters: {
                    filteredList: () => staticInfoArray,
                },
                actions: {
                    loadAll: jest.fn(),
                    setSpamOnly: jest.fn(),
                },
            },
            email: {
                namespaced: true,
                state: {
                    ...new EmailState,
                    current: staticSingleEmail,
                },
                getters: {
                    exists: () => true,
                    content: () => 'Content',
                },
                actions: {
                    load: jest.fn(),
                    updateEmailStatus: jest.fn(),
                },
            },
            messaging: {
                state: new MessagingState,
                actions: {
                    setLoading: jest.fn(),
                    push: jest.fn(),
                },
            }
        }
    };

    const options = merge(defaultOptions, customOptions);

    return {
        store: new Vuex.Store(options),
        options,
    }
};
