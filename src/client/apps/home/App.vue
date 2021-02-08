<template>
    <Layout>
        <Markdown>
            ### Documentation

            The slides are saved as markdown in `/docs`. 
            They use [Marp](https://marp.app) to convert the `.md` files into html.
            You can configure **vscode** to preview the slides as well. 

            ### Code examples

            The code examples are saved in `/src/client/code`.
            Dive into these examples code to get a "real world" grasp
            of the tipocs we're talking about during the lessons.
            I'll do my best to keep them updated. 🤓
        
            ### Exercises

            The exercises are saved in `/src/client/exercise`.
            This is where you come into play: I'll publish reasonable challenges
            here that you can take over in your spare time. 
            Everything is already setup. 
            
            Run this platform in dev mode:

            ```
            yarn build --watch      # watch for client code changes
            yarn server             # spin the server
            ```

            And follow the instructions in the exercise description page.
        </Markdown>
    </Layout>
</template>

<script lang="ts">
    import Vue from 'vue';
    export default Vue.extend({});
</script>
