import { AxiosResponse } from 'axios';
import { netlify } from '@helpers/network-provider';
import { EmailInfo, Email, EmailStatus } from '../typings/Email';

export const getEmails = async (): Promise<EmailInfo[]> => {
    try {
        const { data }: AxiosResponse<EmailInfo[]> = await netlify({
            url: '/emails',
            method: 'GET',
        });

        return data;
    } catch (error) {
        console.error(error);
        return Promise.reject(error);
    }
}

export const getEmail = async (id: string): Promise<Email> => {
    try {
        const { data }: AxiosResponse<Email> = await netlify({
            url: '/emails',
            method: 'GET',
            params: {
                id,
            }
        });

        return data;
    } catch (error) {
        console.error(error);
        return Promise.reject(error);
    }
}

export const updateEmailStatus = async (id: string, status: EmailStatus): Promise<Email> => {
    try {
        const { data }: AxiosResponse<Email> = await netlify({
            url: '/emails',
            method: 'PATCH',
            params: {
                id,
            },
            data: {
                status
            }
        });

        return data;
    } catch (error) {
        console.error(error);
        return Promise.reject(error);
    }
}
