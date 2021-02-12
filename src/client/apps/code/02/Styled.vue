<template>
    <section class="styled is-size-4" :class="modifier" @click="onClick">
        <h1 class="title is-1">🧑‍🎤 Styled component</h1>

        Text, by default, has this color: black 
        (actually, it's very very dark gray).

        <div class="styled__element">
            But in this element, I decided to change it to blue.
            
            <slot></slot>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    @import 'variables';

    .styled {
        /**
        scoped styles can be tricky
        */

        strong {
            color: $green;
        }

        &--deep ::v-deep strong {
            color: $red;
        }

        &__element {
            color: $cyan;
        }
    }
</style>

<script lang="ts">
    import { Vue, Component } from 'vue-property-decorator';

    @Component({
        name: 'Styled',
    })
    export default class extends Vue {
        isDeep: boolean = false;

        get modifier(): string {
            if (this.isDeep) {
                return 'styled--deep';
            } 

            return ''
        } 

        onClick(): void {
            this.isDeep = !this.isDeep;
        }
    }
</script>
