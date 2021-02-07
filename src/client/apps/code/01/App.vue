<template>
    <Layout>
        <DataBinding my-name="Alex" my-surname="Bellini" data-qa="hello!">
            <template #top>
                <h1>HellO!</h1>
            </template>

            <template #default="data">
                <h1>{{ data.data }}</h1>
            </template>
        </DataBinding>
    </Layout>
</template>

<script>
    import Layout from '@components/Layout.vue';
    import DataBinding from './DataBinding.vue';

    export default {
        components: {
            Layout,
            DataBinding
        }
    }
</script>
