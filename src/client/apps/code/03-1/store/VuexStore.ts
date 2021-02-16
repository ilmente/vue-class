import Vue from 'vue';
import Vuex, { Store } from 'vuex';
import cloneDeep from 'lodash/cloneDeep'; 
import reduce from 'lodash/reduce';
import { Post } from '@typings/blog';
import { netlify } from '@helpers/network-provider';
import { AxiosResponse } from 'axios';
import { RootState } from '../typings/RootState';

Vue.use(Vuex);

export const vuexStore: Store<RootState> = new Vuex.Store({
    strict: true,
    
    state: {
        ...cloneDeep(window.__INITIAL_STATE__) as RootState,
    },

    mutations: {
        SET_POSTS(state: RootState, posts: Post[]) {
            state.blog.posts = [
                ...state.posts || [],
                ...posts,
            ];
        },

        INCREASE_POST_DISLIKES(state: RootState, { id }) {
            const target = state.posts.find((post: Post) => post.id === id);

            if (!target) {
                return;
            }

            target.dislikes += 1;
        }
    },

    getters: {
        totalDislikes({ posts }: RootState): number {
            return reduce(
                posts,
                (counter: number, post: Post) => counter + post.dislikes,
                0
            );
        },
    },

    actions: {
        async loadLivePosts({ commit }): Promise<void> {
            const { data }: AxiosResponse<Post[]> = await netlify({
                url: '/posts'
            });

            commit('SET_POSTS', data);
        },
    },
});
