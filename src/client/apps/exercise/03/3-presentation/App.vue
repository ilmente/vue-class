<template>
    <Layout>
        <DataViewer />

        <Markdown>
            # Todo

            The goal of this exercise is to create an app with a notification system.
            Use all you learned so far about `state management` and data flow to recreate
            an app that loads a page using an ajax call. 
            That's it.

            Rely on the initial state to set off the first notification and to setup the page.
            Using the page client, fetch the page and display it.
            Keep in mind that the endpoint can (and will) fail from time to time.

            For each step (*successfull* page load, *failed* page load), push a notification.
            The "Reload page" button is a *nice to have*. 🤓

            ### Pro tips

            - the data layer is done: typings and clients are already developed
            - create 3 modules: `global`, `messaging` and `cms`
            - the `global` module is for `isLoading` monitor
            - the `messaging` module is for the notifications
            - the `cms` module is for the page content and fetch

            ## Screenshots

            ![](/assets/exercise/03-1.png)
            ![](/assets/exercise/03-2.png)
            ![](/assets/exercise/03-3.png)
        </Markdown>
    </Layout>
</template>
