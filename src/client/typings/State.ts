import { Navigation } from './Navigation';

export interface Platform {
    version: string;
    build: number;
}

export interface State {
    platform: Platform;
    navigation: Navigation;
    [key: string]: unknown;
}
