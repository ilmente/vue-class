import cloneDeep from 'lodash/cloneDeep'; 
import reduce from 'lodash/reduce';
import { Post } from 'typings/post';
import { netlify } from 'helpers/network-provider';
import { State } from 'typings/state';

export const simpleStore = ((initialState: State) => ({
    state: { 
        ...initialState,
        posts: initialState.posts || [],
    },

    getTotalDislikes(): number {
        return reduce(
            this.state.posts,
            (counter: number, post: Post) => counter + post.dislikes,
            0
        );
    },

    async loadLivePosts(): Promise<void> {
        const { data } = await netlify({
            url: '/posts'
        });

        this.state.posts = [
            ...this.state.posts,
            ...data.posts as Post[],
        ];
    },

    increasePostDislikes(id: string): void {
        const target = this.state.posts.find((post: Post) => post.id === id);

        if (!target) {
            return;
        }

        target.dislikes += 1;
    }
}))(cloneDeep(window.__INITIAL_STATE__))
