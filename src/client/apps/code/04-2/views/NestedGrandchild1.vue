<template>
    <section class="content">
        <hr>
        <h4>Nested grandchild view 2.1</h4>
        <p>
            Called on <strong>{{date}}</strong>
        </p>
        <p v-for="index in 3" :key="`lorem-${index}`">
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit lorem ipsum dolor. 
            Pellentesque risus mi, 
            tempus quis placerat ut, porta nec nulla. 
            Vestibulum rhoncus ac ex sit amet fringilla.
        </p>
    </section>
</template>

<script lang="ts">
    import { Vue, Component } from 'vue-property-decorator';

    @Component({
        name: 'NestedGrandchild1',
    })
    export default class extends Vue {
        get date(): string {
            const date = parseInt(this.$route.params.date);
            return new Date(date).toString();
        }
    }
</script>
