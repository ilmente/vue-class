import { InitialState } from '@typings/InitialState';
import { EmailListState } from './modules/EmailListState';
import { EmailState } from './modules/EmailState';
import { MessagingState } from './modules/MessagingState';

export interface RootState extends InitialState {
    emailList: EmailListState;
    email: EmailState;
    messaging: MessagingState;
}
