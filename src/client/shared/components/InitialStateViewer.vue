<template>
    <div class="content">
        <h3>InitialState</h3>
        <pre><code>{{ initialState }}</code></pre>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';

    export default Vue.extend({
        computed: {
            initialState(): string {
                const initialState = window.__INITIAL_STATE__ || {};
                const json = JSON.stringify(initialState, null, 4);

                console.info('InitialState', initialState);
                return json
            }
        },
    })
</script>
