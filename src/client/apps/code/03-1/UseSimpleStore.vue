<template>
    <Grid :items="state.posts">
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
    import { State } from 'typings/state';

    @Component({
        name: 'UseLocalState',
        components: {
            PostCard,
            DislikeButton,
        }
    })
    export default class extends Vue {
        state: State = simpleStore.state;

        async mounted(): Promise<void> {
            await simpleStore.loadLivePosts();
        }

        onDislike(id: string): void {
            simpleStore.increasePostDislikes(id);
        }
    }
</script>
