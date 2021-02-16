import cloneDeep from 'lodash/cloneDeep'; 
import reduce from 'lodash/reduce';
import { netlify } from '@helpers/network-provider';
import { AxiosResponse } from 'axios';
import { Post } from '../typings/Post';
import { RootState } from '../typings/RootState';

export const simpleStore = ((state: RootState) => ({
    state,

    getTotalDislikes(): number {
        return reduce(
            this.state.posts,
            (counter: number, post: Post) => counter + post.dislikes,
            0
        );
    },

    async loadLivePosts(): Promise<void> {
        const { data }: AxiosResponse<Post[]> = await netlify({
            url: '/posts'
        });

        this.state.posts = [
            ...this.state.posts,
            ...data,
        ];
    },

    increasePostDislikes(id: string): void {
        const target = this.state.posts.find((post: Post) => post.id === id);

        if (!target) {
            return;
        }

        target.dislikes += 1;
    }
}))(cloneDeep(window.__INITIAL_STATE__) as RootState)
