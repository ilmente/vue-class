<template>
    <OneColLayout class="error">
        <span class="error__icon">🤬 {{code}}</span>
    </OneColLayout>
</template>

<style lang="scss">
    @use 'variables';

    .error {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;

        &__icon {
            font-size: 10rem;
        }
    }
</style>

<script lang="ts">
    import { Vue, Component, Prop } from 'vue-property-decorator';
    import OneColLayout from '../layouts/OneColLayout.vue';

    @Component({
        name: 'Error',
        components: {
            OneColLayout,
        }
    })
    export default class extends Vue {
        @Prop({ type: Number, default: 404 }) code!: number;
    }
</script>
