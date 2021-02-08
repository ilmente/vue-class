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
    import Layout from 'components/Layout';
    import DataBinding from './DataBinding';

    export default {
        components: {
            Layout,
            DataBinding
        }
    }
</script>
