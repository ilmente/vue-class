import { Domain } from './Domain';

export type RouteMap = {
    [key in Domain]: { template: string, resolve: (entry?: string) => string };
}
