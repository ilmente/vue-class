<template>
    <Layout>
        <h4 class="title is-4">Dislikes count</h4>
        <ul>
            <li>Local state: <strong>{{localStateCount}}</strong></li>
            <li>Simple store: <strong>{{getSimpleStoreCount()}}</strong></li>
            <li>Vuex store: <strong>{{totalDislikes}}</strong></li>
        </ul>

        <hr>

        <h4 class="title is-4">Apps</h4>
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
    import { eventBus } from '@helpers/event-bus';
    import { simpleStore } from './store/SimpleStore';
    import { Getter } from 'vuex-class';
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
        @Getter totalDislikes!: number;
    }
</script>
