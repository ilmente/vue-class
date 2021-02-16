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
        }) initialDislikes!: number;
        dislikes: number = this.initialDislikes;

        @Emit('dislike')
        protected onDislikeClick(): number {
            this.dislikes += 1;
            return this.dislikes;
        }
    }
</script>
