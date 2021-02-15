import { Navigation } from './Navigation';
import { Post } from './Post';

export interface Platform {
    version: string;
    build: number;
}

export interface State {
    platform: Platform;
    navigation: Navigation;
    posts?: Post[];
    [key: string]: unknown;
}
