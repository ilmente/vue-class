import { State } from 'typings/state';
import { bootstrap } from 'helpers/bootstrap';
import { vuexStore } from './connection/vuex-store';
import App from './App.vue';

bootstrap<State>(App, vuexStore);
