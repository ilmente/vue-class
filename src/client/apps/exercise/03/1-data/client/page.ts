import { Page } from '../typings/Page';
import { netlify } from '@helpers/network-provider';
import { AxiosResponse } from 'axios';

export const getPage = async (): Promise<Page> => {
    try {
        const { data }: AxiosResponse<Page> = await netlify({
            url: '/page',
        });

        return data;
    } catch (error) {
        console.error(error);
        return Promise.reject(error);
    }
}
