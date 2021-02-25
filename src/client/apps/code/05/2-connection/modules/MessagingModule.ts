import { Module } from 'vuex';
import { MessagingState } from './MessagingState';
import { Notification } from '../../1-data/typings/Notification';
import { RootState } from '../RootState';

export const MessagingModule: Module<MessagingState, RootState> = {
    namespaced: true,
    state: new MessagingState(),

    mutations: {
        SET_LOADING(state: MessagingState, value: boolean): void {
            state.isLoading = value;
        },

        ADD_NOTIFICATION(state: MessagingState, notification: Notification): void {
            state.notifications = [
                ...state.notifications,
                notification,
            ]
        },
    },

    actions: {
        setLoading({ commit }, value: boolean): void {
            commit('SET_LOADING', value);
        },

        push({ commit }, notification: Notification): void {
            commit('ADD_NOTIFICATION', notification);
        },
    },
};
