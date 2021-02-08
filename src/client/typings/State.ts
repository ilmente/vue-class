import { Navigation } from './Navigation';

export interface State {
    navigation: Navigation;
    [key: string]: unknown;
}
