/**
 * https://jestjs.io/docs/en/tutorial-async
 */

import * as client from './email';

/**
 *
 * 1. manual mock
 *
 */
// jest.mock('@helpers/network-provider');
// import { infoArray as emails } from '@mock/email';

// test('getEmails returns EmailInfo[]', (): Promise<any> => {
//     return expect(client.getEmails()).resolves.toEqual(emails);
// });

/**
 *
 * 2. single axios-mock-adapter
 *
 */
// import { netlify } from '@helpers/network-provider';
// import MockAdapter from 'axios-mock-adapter';
// import { infoArray as emails } from '@mock/email';

// const mock = new MockAdapter(netlify);

// test('getEmails returns EmailInfo[]', async (done) => {
//     mock.onGet('/emails').reply(200, emails);
//     await expect(client.getEmails()).resolves.toEqual(emails);
//     done();
// });

/**
 *
 * 3. endpoint mock
 *
 */
import { loadEmails } from '@mock/endpoints';
import { Email, EmailInfo } from '../typings/Email';

const {response, input} = loadEmails();

test('getEmails returns EmailInfo[]', async () => {
    const list: EmailInfo[] = await client.getEmails();
    expect(list).toEqual(response.getEmails);
    return;
});

test('updateEmailStatus returns Email', async () => {
    return expect(client.updateEmailStatus(input.patchEmail.id, input.patchEmail.status))
        .resolves
        .toEqual(response.patchEmail);
});

describe('getEmail', () => {
    test('returns Email with same id', () => {
        expect.assertions(2);

        return client.getEmail(input.getEmail.params.id).then((email: Email) => {
            expect(email).toEqual(response.getEmail);
            expect(email.id).toEqual(input.getEmail.params.id);
        });
    });

    test('fails with wrong id', async (done) => {
        try {
            await client.getEmail('qwerty');
        } catch (error) {
            expect(error).toBeTruthy();
        } finally {
            done();
        }
    });
});
