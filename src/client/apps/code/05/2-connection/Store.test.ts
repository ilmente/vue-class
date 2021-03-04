import { createLocalVue } from '@vue/test-utils';
import Vuex, { Store } from 'vuex';
import { storeOptions } from './Store';
import { loadEmails } from '@mock/endpoints';
import cloneDeep from 'lodash/cloneDeep';
import { RootState } from './RootState';
import { infoArray } from '@mock/email';
import { NotificationType } from '../1-data/typings/Notification';

let store: Store<RootState>;
let context: any;

beforeAll(() => {
    context = loadEmails();
});

beforeEach(() => {
    store = new Vuex.Store(cloneDeep(storeOptions))
});

test('emailList.list is initially empty', () => {
    const localVue = createLocalVue();
    localVue.use(Vuex);    
    
    expect(store.state.emailList.list).toHaveLength(0);
});

test('SET_LIST mutation works', async () => {
    const localVue = createLocalVue();
    localVue.use(Vuex);

    expect(store.state.emailList.list).toHaveLength(0);
    store.commit('emailList/SET_LIST', infoArray);
    expect(store.state.emailList.list).toHaveLength(3);
});

test('loadAll actions works', async () => {
    const localVue = createLocalVue();
    localVue.use(Vuex);

    expect(store.state.emailList.list).toHaveLength(0);
    await store.dispatch('emailList/loadAll');
    expect(store.state.emailList.list).toHaveLength(3);
});

test('updateEmailStatus actions works and send notification', async () => {
    const localVue = createLocalVue();
    localVue.use(Vuex);

    expect(store.state.email.current).toBeFalsy();
    await store.dispatch('email/updateEmailStatus', context.input.patchEmail);
    expect(store.state.email.current).toBeTruthy();
    expect(store.state.email.current?.status).toBe(context.input.patchEmail.status);

    const notification = {
        content: `Email "${store.state.email.current?.subject}" updated`,
        type: NotificationType.Success,
    }

    expect(store.state.messaging.notifications).toContainEqual(notification);
});
