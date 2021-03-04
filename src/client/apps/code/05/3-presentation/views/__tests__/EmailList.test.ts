import { mount } from '@vue/test-utils'
import EmailList from '../EmailList.vue';
import { localVueWithRouter, router } from '@test/local-vue';
import { staticInfoArray } from '@mock/email';
import Vuex from 'vuex';

const provide = {
    RouteName: { EMAIL: '#' }
}

describe('EmailList.vue', () => {
    let store: any;
    let state: any;
    let actions: any;
    let getters: any;

    const getWrapper = () => mount(EmailList, {
        localVue: localVueWithRouter,
        router,
        store,
        provide,
        stubs: ['router-link'],
    });

    beforeEach(() => {
        state = {
            isLoading: false,
        }

        getters = {
            filteredList: () => staticInfoArray,
        }

        actions = {
            loadAll: jest.fn()
        }

        store = new Vuex.Store({
            modules: {
                emailList: {
                    actions,
                    getters,
                    namespaced: true
                },
                messaging: {
                    state,
                }
            }
        })
    });

    test('snapshot', () => {
        const wrapper = getWrapper();
        expect(wrapper.element).toMatchSnapshot();
    });

    test('call loadAll', () => {
        getWrapper();
        expect(actions.loadAll).toHaveBeenCalledTimes(1);
    });
});
