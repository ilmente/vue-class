import { InitialState } from '@typings/InitialState';
import { bootstrap } from '@helpers/bootstrap';
import { vuexStore } from './store/VuexStore';
import App from './App.vue';

bootstrap<InitialState>(App, vuexStore);
