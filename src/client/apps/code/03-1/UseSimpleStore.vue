<template>
    <Grid :items="blog.posts">
        <template #default="{ item }">
            <PostCard :post="item">
                <DislikeButton :initial-dislikes="item.dislikes" @dislike="onDislike(item.id)" />
            </PostCard> 
        </template>
    </Grid>
</template>

<script lang="ts">
    import { Vue, Component } from 'vue-property-decorator';
    import { simpleStore } from './store/SimpleStore';
    import PostCard from './PostCard.vue';
    import DislikeButton from './DislikeButton.vue';
    import { Blog } from '@typings/blog';

    @Component({
        name: 'UseLocalState',
        components: {
            PostCard,
            DislikeButton,
        }
    })
    export default class extends Vue {
        blog: Blog = simpleStore.state.blog;

        async mounted(): Promise<void> {
            await simpleStore.loadLivePosts();
        }

        onDislike(id: string): void {
            simpleStore.increasePostDislikes(id);
        }
    }
</script>
