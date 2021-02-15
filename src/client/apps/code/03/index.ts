import { State } from 'typings/State';
import { simpleBootstrap } from 'helpers/bootstrap';
import { vuexStore } from './connection/vuex-store';
import App from './App.vue';

simpleBootstrap<State>(App, vuexStore);
