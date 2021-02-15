import Vue, { VueConstructor } from 'vue';
import { Store } from 'vuex';
import Layout from 'components/Layout.vue';
import Markdown from 'components/Markdown.vue';
import DataViewer from 'components/DataViewer.vue';
import Tab from 'components/Tab.vue';
import Tabs from 'components/Tabs.vue';
import Grid from 'components/Grid.vue';

Vue.component('Layout', Layout);
Vue.component('Markdown', Markdown);
Vue.component('DataViewer', DataViewer);
Vue.component('Tab', Tab);
Vue.component('Tabs', Tabs);
Vue.component('Grid', Grid);

export const simpleBootstrap = <S = any>(App: VueConstructor<Vue>, store?: Store<S>) => {
    const app = new Vue({
        template: `<App />`,
        store,

        components: {
            App
        },
    });

    app.$mount('#app');
}
