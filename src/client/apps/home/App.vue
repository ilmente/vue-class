<template>
    <Layout title="Welcome">
        <div class="columns">
            <Markdown class="column">
                ### Documentation

                The slides are saved as markdown in `/docs`. 
                They use [Marp](https://marp.app) to convert the `.md`` files into html.
                You can access them from the menu above.

                ### Code examples

                The code examples are saved in `/src/client/pages/code`.
                You can access them from the menu above.
            </Markdown>

            <Markdown class="column">
                ### Exercises

                The exercises are saved in `/src/client/pages/exercise`.
                You can access them from the menu above. 

                ### Repository

                The project is maintained on [github.com/ilmente](https://github.com/ilmente/vue-class)
                and available under [MIT licence](https://github.com/ilmente/vue-class/blob/master/LICENSE).
            </Markdown>
        </div>
    </Layout>
</template>

<script lang="ts">
    import Vue from 'vue';
    export default Vue.extend({});
</script>
