import MockAdapter from 'axios-mock-adapter';
import { netlify } from '@helpers/network-provider';
import { infoArray, singleEmail } from '@mock/email';
import { EmailStatus } from '../client/apps/code/05/1-data/typings/Email';

const mock = new MockAdapter(netlify);

export const loadEmails = () => {
    const input = {
        getEmail: { params: { id: singleEmail.id }},
        patchEmail: { id: singleEmail.id, status: singleEmail.status as EmailStatus },
    }

    const response = {
        getEmails: infoArray,
        getEmail: singleEmail,
        patchEmail: singleEmail,
    }

    mock.onGet('/emails', input.getEmail).reply(200, response.getEmail);
    mock.onGet('/emails').reply(200, response.getEmails);
    mock.onPatch('/emails', input.patchEmail).reply(200, response.patchEmail);
    
    return { input, response, };
}
