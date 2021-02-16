import { bootstrap } from '@helpers/bootstrap';
import { vuexStore } from './store/VuexStore';
import { RootState } from './typings/RootState';
import App from './App.vue';

bootstrap<RootState>(App, vuexStore);
