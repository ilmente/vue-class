<template>
    <Grid :items="posts">
        <template #default="{ item }">
            <PostCard :post="item" /> 
        </template>
    </Grid>
</template>

<script lang="ts">
    import { Vue, Component, Prop } from 'vue-property-decorator';
    import PostCard from './PostCard.vue';
    import { Post } from 'typings/post';

    @Component({
        name: 'UsingProps',
        components: {
            PostCard,
        }
    })
    export default class extends Vue {
        @Prop({
            type: Array,
            required: true,
        }) posts!: Post[];
    }
</script>
