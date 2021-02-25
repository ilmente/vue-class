<template>
    <div class="two-cols-layout columns is-gapless">
        <aside class="two-cols-layout__sidebar column is-one-quarter">
            <slot name="sidebar"></slot>
        </aside>
        <main class="column">
            <slot></slot>
        </main>
    </div>
</template>

<style lang="scss">
    @use 'variables';

    .two-cols-layout {
        height: 100%;

        &__sidebar {
            background-color: variables.$white-bis;
            border-right: 1px solid variables.$grey-lightest;
            height: 100%;
            overflow: auto;
        }
    }
</style>
