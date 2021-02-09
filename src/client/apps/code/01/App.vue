<template>
    <Layout>
        <DataBindingAndTemplating someText="This text comes from a prop!">
            <template #top>
                <p>
                    <em>This content is injected in the #top slot</em>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </template>

            <template #default="{ text }">
                <p>
                    Scoped slot: <strong>{{ text }}</strong>
                    <br>
                    <em>This content is injected in the #default slot</em>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </template>
        </DataBindingAndTemplating>
    </Layout>
</template>

<script>
    import Layout from 'components/Layout.vue';
    import DataBindingAndTemplating from './DataBindingAndTemplating.vue';

    export default {
        components: {
            Layout,
            DataBindingAndTemplating
        }
    }
</script>
