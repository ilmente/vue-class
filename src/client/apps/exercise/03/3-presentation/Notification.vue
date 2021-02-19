<template>
    <transition name="fade">
        <div v-show="isVisible" class="notification" :class="data.type && `is-${data.type}`">
            <button class="delete" @click="onClick"></button>
            <slot>{{data.content}}</slot>
        </div>
    </transition>
</template>

<style lang="scss" scoped>
    .fade-enter-active, 
    .fade-leave-active {
        transition: opacity 300ms;
    }
    .fade-enter, 
    .fade-leave-to {
        opacity: 0;
    }
</style>

<script lang="ts">
    import { Vue, Component, Prop } from 'vue-property-decorator';
    import { Notification } from '../1-data/typings/Notification';

    const DEFAULT_TIMEOUT = 5000;

    @Component({
        name: 'Notification',
    })
    export default class extends Vue {
        @Prop({
            type: Object,
            required: true,
        }) data!: Notification;

        timeoutId: ReturnType<typeof setTimeout> | null = null;
        isVisible: boolean = false;

        mounted(): void {
            this.isVisible = true;
            this.hide();
        }

        onClick(): void {
            if (this.timeoutId) {
                clearTimeout(this.timeoutId);
            }
            
            this.isVisible = false;
        }

        hide(): void {
            this.timeoutId = setTimeout(() => {
                this.isVisible = false;
            }, DEFAULT_TIMEOUT);
        }
    }
</script>
