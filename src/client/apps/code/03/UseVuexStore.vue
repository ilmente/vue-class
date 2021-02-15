<template>
    <Grid :items="store.state.posts">
        <template #default="{ item }">
            <PostCard :post="item">
                <DislikeButton :initial-dislikes="item.dislikes" @dislike="onDislike(item.id)" />
            </PostCard> 
        </template>
    </Grid>
</template>

<script lang="ts">
    import { Vue, Component } from 'vue-property-decorator';
    import { simpleStore } from './connection/simple-store';
    import PostCard from './PostCard.vue';
    import DislikeButton from './DislikeButton.vue';

    @Component({
        name: 'UseLocalState',
        components: {
            PostCard,
            DislikeButton,
        }
    })
    export default class extends Vue {
        store = simpleStore;

        async mounted(): Promise<void> {
            await this.store.loadLivePosts();
        }

        onDislike(id: string): void {
            this.store.increasePostDislikes(id);
        }
    }
</script>
