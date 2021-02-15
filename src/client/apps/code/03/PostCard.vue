<template>
    <div class="card">
        <div class="card-image">
            <figure class="image is-4by3">
                <img :src="post.imageSrc">
            </figure>
        </div>

        <div class="card-content">
            <div class="media">
                <div class="media-content">
                    <p class="title is-4">{{post.name}}</p>
                    <p class="subtitle is-6">@{{post.username}}</p>
                </div>
            </div>

            <div class="content">
                {{post.content}}
            </div>
        </div>

        <footer class="card-footer">
            <p class="card-footer-item">
                <slot :post="post"></slot>
            </p>
        </footer>
    </div>
</template>

<script lang="ts">
    import { Vue, Component, Prop } from 'vue-property-decorator';
    import { Post } from 'typings/Post';

    @Component({
        name: 'PostCard',
    })
    export default class extends Vue {
        @Prop({
            type: Object,
            required: true,
        })
        post!: Post;
    }
</script>
