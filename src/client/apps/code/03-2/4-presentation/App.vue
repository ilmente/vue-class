<template>
    <Layout>
        <div class="content">
            <h3>Dislikes count: {{totalDislikes}}</h3>
            <p v-if="isLoading">
                Loading posts...
            </p>
            <p v-else>
                Loaded {{posts.length}} posts
            </p>
        </div>

        <Grid :items="posts">
            <template #default="{ item }">
                <PostCard :post="item">
                    <DislikeButton 
                        :dislikes="item.dislikes" 
                        @dislike="onDislike(item.id)" 
                        :disabled="isLoading"/>
                </PostCard> 
            </template>
        </Grid>

        <DataViewer />
    </Layout>
</template>

<script lang="ts">
    import { Vue, Component } from 'vue-property-decorator';
    import PostCard from './PostCard.vue';
    import DislikeButton from './DislikeButton.vue';
    import { RootState } from '../3-connection/RootState';

    /**
     * Approach 1: mapping
     */
    import { mapState, mapGetters } from 'vuex';

    @Component({
        name: 'App',
        components: {
            PostCard,
            DislikeButton,
        },
        computed: {
            ...mapState<RootState>({
                isLoading: (state: RootState) => state.global.isLoading,
            }),
            ...mapState('blog', ['posts']),
            ...mapGetters('blog', ['totalDislikes']),
        },
    })
    export default class extends Vue {
        async onDislike(id: string): Promise<void> {
            await this.$store.dispatch('blog/increasePostDislikes', { id });
        }

        async created(): Promise<void> {
            await this.$store.dispatch('blog/loadPosts');
        }
    }

    /**
     * Approach 2: StoreComponent
     */
    // import { Store } from 'vuex';
    // import { Post } from '../1-data-access/typings/Post';

    // abstract class StoreComponent extends Vue {
    //     $store!: Store<RootState>
    // }

    // @Component({
    //     name: 'App',
    //     components: {
    //         PostCard,
    //         DislikeButton,
    //     },
    // })
    // export default class extends StoreComponent {
    //     get isLoading(): boolean {
    //         return this.$store.state.global.isLoading;
    //     }

    //     get posts(): Post[] {
    //         return this.$store.state.blog.posts;
    //     }

    //     get totalDislikes(): number {
    //         return this.$store.getters['blog/totalDislikes'];
    //     }

    //     async created(): Promise<void> {
    //         await this.$store.dispatch('blog/loadPosts');
    //     }

    //     async onDislike(id: string): Promise<void> {
    //         await this.$store.dispatch('blog/increasePostDislikes', { id });
    //     }
    // }

    /**
     * Approach 3: vuex-class
     */
    // import { State, namespace } from 'vuex-class';
    // import { Post } from '../1-data-access/typings/Post';
    // import { BlogState } from '../3-connection/modules/BlogState';

    // const Blog = namespace('blog');

    // @Component({
    //     name: 'App',
    //     components: {
    //         PostCard,
    //         DislikeButton,
    //     },
    // })
    // export default class extends Vue {
    //     @State((state: RootState) => state.global.isLoading) isLoading!: boolean;
    //     @Blog.State((state: BlogState) => state.posts) posts!: Post[];
    //     @Blog.Getter totalDislikes!: number;
    //     @Blog.Action loadPosts!: Function;
    //     @Blog.Action increasePostDislikes!: Function;

    //     async created(): Promise<void> {
    //         await this.loadPosts();
    //     }

    //     async onDislike(id: string): Promise<void> {
    //         await this.increasePostDislikes({ id });
    //     }
    // }
</script>
