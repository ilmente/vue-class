import { InitialState } from '@typings/InitialState';
import { GlobalState } from './modules/GlobalState';
import { BlogState } from './modules/BlogState';

export interface RootState extends InitialState {
    global: GlobalState,
    blog: BlogState;
}
