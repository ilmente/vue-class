<template>
    <section class="content">
        <h3>Another page</h3>
        <p>
            Called on <em>{{date}}</em>
        </p>
        <p>
            Sed ut perspiciatis unde omnis iste natus error sit 
            voluptatem accusantium doloremque laudantium, totam rem aperiam, 
            eaque ipsa quae ab illo inventore veritatis et quasi architecto 
            beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem 
            quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur 
            magni dolores eos qui ratione voluptatem sequi nesciunt.
        </p>
    </section>
</template>

<script lang="ts">
    import { Component, Mixins } from 'vue-property-decorator';
    import HashMixin from '@mixins/HashMixin';

    @Component({
        name: 'AnotherPage',
    })
    export default class extends Mixins(HashMixin) {
        get date(): string {
            const date = parseInt(this.hashObject.date as string);
            return new Date(date).toString();
        }   
    }
</script>
