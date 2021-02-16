import { Navigation } from './Navigation';

export interface Platform {
    version: string;
    build: number;
}

export interface InitialState {
    platform: Platform;
    navigation: Navigation;
    [key: string]: any;
}
