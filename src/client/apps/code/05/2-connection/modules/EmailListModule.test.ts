import { staticInfoArray } from '@mock/email';
import { RootState } from '../RootState';
import { EmailListModule } from './EmailListModule';
import { EmailListState } from './EmailListState';
import { loadEmails } from '@mock/endpoints';

describe('mutations', () => {
    test('SET_LIST', () => {
        const state = new EmailListState;

        expect(state.list).toHaveLength(0);
        EmailListModule.mutations?.SET_LIST(state, [...staticInfoArray]);
        expect(state.list).toHaveLength(3);
    })
});

describe('getters', () => {
    test('filteredList', () => {
        const state = {
            ...new EmailListState,
            list: [...staticInfoArray],
        }

        expect(state.list).toHaveLength(3);

        const filteredList = EmailListModule.getters?.filteredList(
            state,
            null,
            {} as RootState,
            null
        );

        expect(filteredList).toHaveLength(2);
    }) 

    test('filteredList simplified', () => {
        const state = {
            list: [ ...staticInfoArray ],
        }

        expect(state.list).toHaveLength(3);
        // @ts-ignore
        expect(EmailListModule.getters?.filteredList(state)).toHaveLength(2);
    }) 
});

describe('actions', () => {
    let context: any;

    beforeAll(() => {
        context = loadEmails();
    });

    test('loadAll', async () => {
        const commit = jest.fn();
        const dispatch = jest.fn();

        // @ts-ignore
        await EmailListModule.actions?.loadAll({ commit, dispatch })

        expect(commit).toHaveBeenCalledWith('SET_LIST', context.response.getEmails);
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenLastCalledWith('messaging/setLoading', false, { root: true });
    })
});
