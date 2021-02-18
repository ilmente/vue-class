import { InitialState } from './typings/InitialState';

declare global {
    interface Window {
        __INITIAL_STATE__: InitialState
    }
}
