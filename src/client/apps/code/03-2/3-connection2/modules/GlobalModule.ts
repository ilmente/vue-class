import { Module } from 'vuex';
import { GlobalState } from './GlobalState';
import { RootState } from '../RootState';

export const GlobalModule: Module<GlobalState, RootState> = {
    namespaced: false,
    state: new GlobalState(),

    mutations: {
        SET_LOADING(state: GlobalState, value: boolean): void {
            state.isLoading = value;
        },
    },

    actions: {
        setLoading({ commit }, value: boolean): void {
            commit('SET_LOADING', value);
        }
    },
};
