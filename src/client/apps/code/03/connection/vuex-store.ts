import Vue from 'vue';
import Vuex, { Store } from 'vuex';
import cloneDeep from 'lodash/cloneDeep'; 
import { State } from 'typings/State';

Vue.use(Vuex);

export const vuexStore: Store<State> = new Vuex.Store({
    strict: true,
    state: cloneDeep(window.__INITIAL_STATE__),
});
