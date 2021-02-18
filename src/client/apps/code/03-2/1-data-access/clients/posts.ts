import { Post } from '../typings/Post';
import { netlify } from '@helpers/network-provider';
import { AxiosResponse } from 'axios';

export const getPosts = async (): Promise<Post[]> => {
    try {
        const { data }: AxiosResponse<Post[]> = await netlify({
            url: '/posts-32',
            method: 'GET',
        });

        return data;
    } catch (error) {
        console.error(error);
        return Promise.reject(error);
    }
}

export const updatePost = async (id: string, dislikes: number): Promise<void> => {
    await netlify({
        url: '/posts-32',
        method: 'PATCH',
        data: {
            id, 
            dislikes,
        }
    });
}
