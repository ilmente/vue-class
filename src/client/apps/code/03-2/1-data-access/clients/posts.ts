import { Post } from '../typings/Post';
import { netlify } from '@helpers/network-provider';
import { AxiosResponse } from 'axios';

export const getPosts = async (): Promise<Post[]> => {
    try {
        const { data }: AxiosResponse<Post[]> = await netlify({
            url: '/posts'
        });

        return data;
    } catch (error) {
        console.error(error);
        return Promise.reject(error);
    }
}

export const updatePost = async (post: Post): Promise<Post> => {
    /**
     * fake method to update the post
     */
    return Promise.resolve(post);
}
