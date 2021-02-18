import { InitialState } from '@typings/InitialState';
import { Post } from './Post';

export interface RootState extends InitialState {
    posts: Post[];
}
