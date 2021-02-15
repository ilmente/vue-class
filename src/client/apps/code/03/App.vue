<template>
    <Layout>
        <div class="content">
            <h3>Dislikes count</h3>
            <ul>
                <li>Local state: <strong>{{localStateCount}}</strong></li>
                <li>Simple store: <strong>{{getSimpleStoreCount()}}</strong></li>
                <li>Vuex store: <strong>x</strong></li>
            </ul>
        </div>

        <hr>
        <h3>Apps</h3>
        <Tabs>
            <Tab label="Local state 🤨" isActive>
                <UseLocalState />
            </Tab>
            <Tab label="Simple store 🙂">
                <UseSimpleStore />
            </Tab>
            <Tab label="Vuex store 🤓">
                <UseVuexStore />
            </Tab>
        </Tabs>

        <DataViewer />
    </Layout>
</template>

<script lang="ts">
    import { Vue, Component } from 'vue-property-decorator';
    import { eventBus } from 'helpers/event-bus';
    import { simpleStore } from './connection/simple-store';
    import UseLocalState from './UseLocalState.vue';
    import UseSimpleStore from './UseSimpleStore.vue';
    import UseVuexStore from './UseVuexStore.vue';

    @Component({
        name: 'App',
        components: {
            UseLocalState,
            UseSimpleStore,
            UseVuexStore,
        }
    })
    export default class extends Vue {
        /**
         * local state
         */
        localStateCount: number = 0;

        created() {
            eventBus.on('local-state-dislike', (count: number) => {
                this.localStateCount = count;
            });
        }

        /**
         * simple store
         * I need to use a method here
         * a computed prop won't work...
         */
        getSimpleStoreCount(): number {
            return simpleStore.getTotalDislikes();
        }

        /**
         * vuex store
         */
    }
</script>
