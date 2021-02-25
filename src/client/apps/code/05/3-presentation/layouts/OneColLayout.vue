<template>
    <main class="one-col-layout">
        <slot></slot>
    </main>
</template>

<style lang="scss">
    @use 'variables';

    .one-col-layout {
        position: relative;
        height: 100%;
        background-color: variables.$white-bis;
    }
</style>
