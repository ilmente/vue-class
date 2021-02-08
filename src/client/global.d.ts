import { State } from './typings/State';

declare global {
    interface Window {
        __INITIAL_STATE__: State
    }
}
