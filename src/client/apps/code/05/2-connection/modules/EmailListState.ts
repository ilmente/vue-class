import { EmailInfo } from '../../1-data/typings/Email';

export class EmailListState {
    list: EmailInfo[] = [];
    isSpamOnly: boolean = false;
}
