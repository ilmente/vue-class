import { State } from 'typings/state';
import { bootstrap } from 'helpers/bootstrap';
import { store } from './3-connection/store';
import App from './4-presentation/App.vue';

bootstrap<State>(App, store);
