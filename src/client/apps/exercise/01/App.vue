<template>
    <Layout>
        <template>
            <InitialStateViewer />
            <Markdown>
                ### Todo

                The goal of this exercise is to recreate a simple checkout step, 
                common to many: the billing address.

                Given a specific set of user data:
                1. display the user information as text, under the label: "Current billing address";
                2. show a checkbox saying "Same as shipping" right below point 1.

                If the **checkbox is selected**, nothing happens.

                If the **checkbox is unselected**, show a prefilled form containaing the
                user informations. As you type into the form, the information displyed 
                above in point 1 should update accordongly.
            </Markdown>
        </template>
    </Layout>
</template>

<script>
    import Layout from 'components/Layout.vue';
    import Markdown from 'components/Markdown.vue';
    import InitialStateViewer from 'components/InitialStateViewer.vue';

    export default {
        components: {
            Layout,
            Markdown,
            InitialStateViewer,
        }
    }
</script>
