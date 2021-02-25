import startCase from 'lodash/startCase';
import { EmailStatus } from '../../1-data/typings/Email';

const mofifierMap = {
    [EmailStatus.READ]: 'is-info is-light',
    [EmailStatus.UNREAD]: 'is-success is-light',
    [EmailStatus.SPAM]: 'is-danger is-light',
}

export const getStatusLabel = (status: EmailStatus): string => startCase(status);

export const getStatusModifier = (status: EmailStatus): string => mofifierMap[status];
