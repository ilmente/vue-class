import { Domain } from '@typings/Domain';
import { RouteMap } from '@typings/Route';
import { Session } from '@typings/Session';

declare global {
    interface Window {
        __INITIAL_STATE__?: Record<string, unknown>;
    }
}

declare module '*.vue' {
    import Vue from 'vue';
    export default Vue;
}

declare module '@src/config' {
    export const routes: RouteMap;
    export const sessions: Session[];
    export const labels: Record<Domain, string>;
}
