<template>
    <article class="message">
        <div class="message-header">
            <p>{{superText}}</p>
        </div>
        <div class="message-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, 
            porta nec nulla.
        </div>
    </article>
</template>

<script lang="ts">
    import { Vue, Component, Prop } from 'vue-property-decorator';
    import { LogMethod } from 'decorators/log';

    @Component
    export default class extends Vue {
        @Prop({
            type: String,
            default: 'Hello, I\'m a super component!',
        })
        readonly superText!: string;

        mounted(): void {
            console.log('[mounted super]', this.superMethod());
        }

        @LogMethod
        superMethod(): string {
            return this.superText;
        }
    }
</script>
