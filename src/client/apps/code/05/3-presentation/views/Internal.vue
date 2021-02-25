<template>
    <TwoColsLayout>
        <template #default>
            <router-view />
        </template>

        <template #sidebar>
            <router-view name="sidebar" />
        </template>
    </TwoColsLayout>
</template>

<script lang="ts">
    import { Vue, Component } from 'vue-property-decorator';
    import TwoColsLayout from '../layouts/TwoColsLayout.vue';

    @Component({
        name: 'Internal',
        components: {
            TwoColsLayout,
        }
    })
    export default class extends Vue {}
</script>
