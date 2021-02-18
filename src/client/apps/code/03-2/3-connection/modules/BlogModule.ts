import reduce from 'lodash/reduce';
import { Module } from 'vuex';
import { getPosts, updatePost } from '../../1-data-access/clients/posts';
import { BlogState } from './BlogState';
import { RootState } from '../RootState';
import { Post } from '../../1-data-access/typings/Post';

export const BlogModule: Module<BlogState, RootState> = {
    namespaced: true,
    state: new BlogState(),

    mutations: {
        SET_POSTS(state: BlogState, posts: Post[]): void {
            state.posts = [
                ...posts,
            ];
        },
    },

    getters: {
        totalDislikes({ posts }: BlogState): number {
            return reduce(
                posts,
                (counter: number, post: Post) => counter + post.dislikes,
                0
            );
        },
    },

    actions: {
        async loadPosts({ commit, dispatch }): Promise<void> {
            dispatch('setLoading', true, { root: true });

            try {
                const posts: Post[] = await getPosts();

                commit('SET_POSTS', posts);
            } catch (error) {
                // manage your error here
            } finally {
                dispatch('setLoading', false, { root: true });
            }
        },

        async increasePostDislikes({ state, dispatch }, { id }): Promise<void> {
            dispatch('setLoading', true, { root: true });

            try {
                const target = state.posts.find((post: Post) => post.id === id);

                if (!target) {
                    return;
                }

                await updatePost(target.id, target.dislikes + 1);
                await dispatch('loadPosts');
            } catch (error) {
                // manage your error here
            } finally {
                dispatch('setLoading', false, { root: true });
            }
        },
    },
};
