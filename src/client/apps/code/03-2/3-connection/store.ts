import Vue from 'vue';
import Vuex, { Store } from 'vuex';
import merge from 'lodash/merge';
import cloneDeep from 'lodash/cloneDeep';
import { RootState } from './RootState';
import { GlobalModule } from './modules/GlobalModule';
import { BlogModule } from './modules/BlogModule';

Vue.use(Vuex);

export const vuexStore: Store<RootState> = new Vuex.Store({
    strict: true,

    modules: {
        global: GlobalModule,
        blog: BlogModule,
    },
});

export function hydrateStore(partialState: Partial<RootState>): Store<RootState> {
    if (!partialState) {
        return vuexStore;
    }

    try {
        const newState = merge(vuexStore.state, cloneDeep(partialState));
        vuexStore.replaceState(newState);
    } catch (error) {
        throw new Error('Store hydration fail');
    }

    return vuexStore;
}
