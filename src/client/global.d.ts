import { State } from './typings/state';

declare global {
    interface Window {
        __INITIAL_STATE__: State
    }
}
