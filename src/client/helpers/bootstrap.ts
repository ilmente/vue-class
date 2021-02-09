import Vue, { VueConstructor } from 'vue';
import Layout from 'components/Layout.vue';
import Markdown from 'components/Markdown.vue';
import DataViewer from 'components/DataViewer.vue';
import Tab from 'components/Tab.vue';
import Tabs from 'components/Tabs.vue';

Vue.component('Layout', Layout);
Vue.component('Markdown', Markdown);
Vue.component('DataViewer', DataViewer);
Vue.component('Tab', Tab);
Vue.component('Tabs', Tabs);

export const simpleBootstrap = (App: VueConstructor<Vue>) => {
    const app = new Vue({
        template: `<App />`,

        components: {
            App
        },
    })

    app.$mount('#app');
}
