<template>
    <section class="my-5">
        <h3 class="title is-3">👨‍🎤 Styled sub-component</h3>
        <slot></slot>
    </section>
</template>

<script lang="ts">
    import { Vue, Component } from 'vue-property-decorator';

    @Component
    export default class extends Vue {}
</script>
