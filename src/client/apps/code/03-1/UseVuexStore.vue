<template>
    <Grid :items="posts">
        <template #default="{ item }">
            <PostCard :post="item">
                <DislikeButton :initial-dislikes="item.dislikes" @dislike="onDislike(item.id)" />
            </PostCard> 
        </template>
    </Grid>
</template>

<script lang="ts">
    import { Vue, Component } from 'vue-property-decorator';
    import { State, Action } from 'vuex-class';
    import { Post } from './typings/Post';
    import PostCard from './PostCard.vue';
    import DislikeButton from './DislikeButton.vue';
    import { RootState } from './typings/RootState';

    @Component({
        name: 'UseLocalState',
        components: {
            PostCard,
            DislikeButton,
        }
    })
    export default class extends Vue {
        @State((state: RootState) => state.posts) posts!: Post[];
        @Action loadLivePosts!: Function;
        @Action increasePostDislikes!: Function;

        async mounted(): Promise<void> {
            await this.loadLivePosts();
        }

        onDislike(id: string): void {
            this.increasePostDislikes({ id });
        }
    }
</script>
