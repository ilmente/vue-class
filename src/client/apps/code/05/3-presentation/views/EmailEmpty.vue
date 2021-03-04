<template>
    <div data-qa-email-empty class="email-empty">
        <span class="email-empty__icon">📬</span>
    </div>
</template>

<style lang="scss">
    @use 'variables';

    .email-empty {
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
