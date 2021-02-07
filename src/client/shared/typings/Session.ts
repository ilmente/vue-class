import { Domain } from './Domain';

export interface SessionItem {
    url: string;
    name?: string;
}

export interface Session {
    name: string;
    [Domain.docs]: SessionItem;
    [Domain.code]: SessionItem;
    [Domain.exercise]: SessionItem;
}
