<template>
    <Layout>
        <div class="content">
            <h3>Dislike count</h3>
            <ul>
                <li>Props with clone: {{countDislikes(postsForPropsClone)}}</li>
                <li>Props with clone deep: {{countDislikes(postsForPropsDeepClone)}}</li>
            </ul>
        </div>

        <Tabs>
            <Tab label="Using properties 😱" isActive>
                <UsingProps :posts="postsForPropsClone" />
            </Tab>
            <Tab label="Using properties with deep clone 😩">
                <UsingProps :posts="postsForPropsDeepClone" />
            </Tab>
            <Tab label="Using a store 🙂">
                
            </Tab>
            <Tab label="Using Vuex store 🤓">
                
            </Tab>
        </Tabs>

        <DataViewer />
    </Layout>
</template>

<script lang="ts">
    import { Vue, Component } from 'vue-property-decorator';
    import UsingProps from './UsingProps.vue';
    import { Post } from 'typings/Post';
    import reduce from 'lodash/reduce'; 
    import cloneDeep from 'lodash/cloneDeep'; 

    const postsClone: Post[] = [...window.__INITIAL_STATE__.posts as Post[]];
    const postsDeepClone: Post[] = cloneDeep(window.__INITIAL_STATE__.posts as Post[]);

    @Component({
        name: 'App',
        components: {
            UsingProps,
        }
    })
    export default class extends Vue {
        postsForPropsClone: Post[] = postsClone;
        postsForPropsDeepClone: Post[] = postsDeepClone;

        countDislikes(posts: Post[]): number {
            return reduce(
                posts, 
                (counter: number, post: Post) => counter + post.dislikes,
                0
            );
        }
    }
</script>
