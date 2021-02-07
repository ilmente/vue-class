import Vue from 'vue';
import Layout from '@components/Layout.vue';
import Markdown from '@components/Markdown.vue';
import InitialStateViewer from '@components/InitialStateViewer.vue';

Vue.component('Layout', Layout);
Vue.component('Markdown', Markdown);
Vue.component('InitialStateViewer', InitialStateViewer);

export const bootstrap = (app: Vue) => {
    app.$mount('#app');
}
