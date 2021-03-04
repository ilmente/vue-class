import Vue from 'vue';
import Vuex, { Store, StoreOptions } from 'vuex';
import merge from 'lodash/merge';
import cloneDeep from 'lodash/cloneDeep';
import { RootState } from './RootState';
import { EmailListModule } from './modules/EmailListModule';
import { EmailModule } from './modules/EmailModule';
import { MessagingModule } from './modules/MessagingModule';

Vue.use(Vuex);

export const storeOptions: StoreOptions<RootState> = {
    strict: true,

    modules: {
        emailList: EmailListModule,
        email: EmailModule,
        messaging: MessagingModule,
    },
}

export const store: Store<RootState> = new Vuex.Store(cloneDeep(storeOptions));

export function hydrateStore(partialState: Partial<RootState>): Store<RootState> {
    if (!partialState) {
        return store;
    }

    try {
        const newState = merge(cloneDeep(store.state), cloneDeep(partialState));
        store.replaceState(newState);
    } catch (error) {
        throw new Error('Store hydration fail');
    }

    return store;
}
