<template>
    <Grid :items="posts">
        <template #default="{ item }">
            <PostCard :post="item">
                <DislikeButton :initial-dislikes="item.dislikes" @dislike="onDislike(item)" />
            </PostCard> 
        </template>
    </Grid>
</template>

<script lang="ts">
    import { Vue, Component } from 'vue-property-decorator';
    import { netlify } from '@helpers/network-provider';
    import { eventBus } from '@helpers/event-bus';
    import cloneDeep from 'lodash/cloneDeep'; 
    import reduce from 'lodash/reduce';
    import { Post } from './typings/Post';
    import PostCard from './PostCard.vue';
    import DislikeButton from './DislikeButton.vue';
    import { AxiosResponse } from 'axios';

    @Component({
        name: 'UseLocalState',
        components: {
            PostCard,
            DislikeButton,
        }
    })
    export default class extends Vue {
        posts: Post[] = cloneDeep(window.__INITIAL_STATE__.posts);

        get totalDislikes(): number {
            return reduce(
                this.posts, 
                (counter: number, post: Post) => counter + post.dislikes,
                0
            );
        }

        created() {
            eventBus.emit('local-state-dislike', this.totalDislikes);
        }

        async mounted(): Promise<void> {
            await this.loadLivePosts();
        }

        async loadLivePosts(): Promise<void> {
            const { data }: AxiosResponse<Post[]> = await netlify({
                url: '/posts-31'
            });

            this.posts = [
                ...this.posts,
                ...data,
            ];

            eventBus.emit('local-state-dislike', this.totalDislikes);
        }

        onDislike(post: Post) {
            post.dislikes += 1;
            eventBus.emit('local-state-dislike', this.totalDislikes);
        }
    }
</script>
