import Vue from 'vue';
import Router from 'vue-router';
import { bootstrap } from '@helpers/bootstrap';
import { router } from './router';
import App from './App.vue';

Vue.use(Router);

bootstrap(App, { router });
