import Router from 'vue-router';
import Home from './views/Home.vue';

const routes = [
    { path: '/', component: Home },
]

export const router = new Router({
    routes,
});
