import Vue from 'vue';
import Vuex, { Store } from 'vuex';
import merge from 'lodash/merge';
import cloneDeep from 'lodash/cloneDeep';
import { RootState } from './RootState';
import { EmailListModule } from './modules/EmailListModule';
import { EmailModule } from './modules/EmailModule';
import { MessagingModule } from './modules/MessagingModule';

Vue.use(Vuex);

export const vuexStore: Store<RootState> = new Vuex.Store({
    strict: true,

    modules: {
        emailList: EmailListModule,
        email: EmailModule,
        messaging: MessagingModule,
    },
});

export function hydrateStore(partialState: Partial<RootState>): Store<RootState> {
    if (!partialState) {
        return vuexStore;
    }

    try {
        const newState = merge(cloneDeep(vuexStore.state), cloneDeep(partialState));
        vuexStore.replaceState(newState);
    } catch (error) {
        throw new Error('Store hydration fail');
    }

    return vuexStore;
}
