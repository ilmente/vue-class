<template>
    <div class="content">
        <h3>InitialState</h3>
        <pre><code>{{ initialState }}</code></pre>
    </div>
</template>

<script lang="ts">
    import Vue, { PropOptions } from 'vue';

    export default Vue.extend({
        props: {
            showNavigation: {
                type: Boolean,
                default: false,
            } as PropOptions<boolean>,
        },

        computed: {
            initialState(): string {
                const initialState = window.__INITIAL_STATE__ || {};
                const initialStateCopy: any = { ...initialState };
                
                console.info('InitialState', initialState);

                if (!this.showNavigation) {
                    initialStateCopy.navigation = '...';
                }

                return JSON.stringify(initialStateCopy, null, 4);
            }
        },
    })
</script>
