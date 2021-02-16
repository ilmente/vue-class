import Vue from 'vue';
import Vuex, { Store } from 'vuex';
import cloneDeep from 'lodash/cloneDeep'; 
import reduce from 'lodash/reduce';
import { State } from 'typings/state';
import { Post } from 'typings/post';
import { netlify } from 'helpers/network-provider';

Vue.use(Vuex);

export const vuexStore: Store<State> = new Vuex.Store({
    strict: true,
    state: {
        ...cloneDeep(window.__INITIAL_STATE__),
    },

    mutations: {
        SET_POSTS(state: State, posts: Post[]) {
            state.posts = [
                ...state.posts || [],
                ...posts,
            ];
        },

        INCREASE_POST_DISLIKES(state: State, { id }) {
            const target = state.posts?.find((post: Post) => post.id === id);

            if (!target) {
                return;
            }

            target.dislikes += 1;
        }
    },

    getters: {
        totalDislikes({ posts }: State): number {
            return reduce(
                posts,
                (counter: number, post: Post) => counter + post.dislikes,
                0
            );
        },
    },

    actions: {
        async loadLivePosts({ commit }): Promise<void> {
            const { data } = await netlify({
                url: '/posts'
            });

            commit('SET_POSTS', data.posts);
        },
    },
});
