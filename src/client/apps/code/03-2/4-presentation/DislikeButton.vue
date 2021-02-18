<template>
    <button class="button is-info" @click="onDislikeClick">
        👎 Dislike ({{dislikes}})
    </button>
</template>

<script lang="ts">
    import { Vue, Component, Prop, Emit } from 'vue-property-decorator';

    @Component({
        name: 'DislikeButton',
    })
    export default class extends Vue {
        @Prop({
            type: Number,
            default: 0,
        }) dislikes!: number;

        @Emit('dislike')
        protected onDislikeClick(): void {}
    }
</script>
