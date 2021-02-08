import Vue from 'vue';
import Layout from 'components/Layout';
import Markdown from 'components/Markdown';
import DataViewer from 'components/DataViewer';

Vue.component('Layout', Layout);
Vue.component('Markdown', Markdown);
Vue.component('DataViewer', DataViewer);

export const bootstrap = (app: Vue) => {
    app.$mount('#app');
}
