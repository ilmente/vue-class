<template>
    <Layout>
        <DataViewer />
        
        <Markdown>
            # Todo

            This time, the challenge is to create an *odd*
            ajax client. 

            I want you to designe a vue comoponent that performs
            ajax calls: it has `url`, `method` and `data` property
            exposed, and it has a *scoped default slot* where any
            child component can access the resulting response.

            Add a *loading* and an *error* slot too, just 
            to make it complete and manage the *loading state* and
            the possible *error state*.

            ```
            |Client url="/url-here"
            |    template #loading
            |    template #default="data"
            |    template #error="error"
            |Client
            ```

            You can connect to a local service `/.netlify/functions/comments`
            that will return an array of comments to display.

            **Be aware:** sometimes (by design) the service will return an error,
            so you need to manage it. Moreover, I added a small artificial delay to each 
            succesfull response. This way, you're *kind of* forced to implement a
            loading management strategy.

            ### Pro tip

            Use the `helpers/network-provider.ts` file to include `axios`. 
            You can choose between a local provider and a netlify provider.
            The latter is already configured for the lambda functions, so you 
            can access the `comments` service just by doing:
            
            ```
            | import { netlify } from '@helpers/network-provider';
            | ...
            | await netlify({ url: '/comments' });
            ```

            ## Development

            - on first terminal: `yarn build --watch` to build and watch the `js/ts/css` app
            - on second terminal: `yarn serve` to spin up the local dev server
            - on third terminal: `yarn serve:lambda` to spin up the netlify lambda local dev server

            To test if `comments` service is successfully running, click here: 
            [/.netlify/functions/comments](/.netlify/functions/comments). 

            ## Code structure (suggested)

            ```
            |Layout
            |   AjaxClient
            |       Comment
            |       Comment
            |       Comment...
            |   /AjaxClient
            |/Layout
            ```

            ## Screenshots

            ![](/assets/exercise/02-1.png)
            ![](/assets/exercise/02-2.png)
            ![](/assets/exercise/02-3.png)
        </Markdown>
    </Layout>
</template>

<script lang="ts">
    import { Vue, Component } from 'vue-property-decorator';

    @Component({
        name: 'App',
    })
    export default class extends Vue {}
</script>
