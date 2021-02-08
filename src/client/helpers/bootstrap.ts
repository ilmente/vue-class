import Vue from 'vue';
import Layout from 'components/Layout';
import Markdown from 'components/Markdown';
import InitialStateViewer from 'components/InitialStateViewer';

Vue.component('Layout', Layout);
Vue.component('Markdown', Markdown);
Vue.component('InitialStateViewer', InitialStateViewer);

export const bootstrap = (app: Vue) => {
    app.$mount('#app');
}
