<template>
    <div class="markdown">                   
        <div ref="markdown" style="display:none;"><slot/></div>
        <section class="markdown__content content" v-html="html"></section>
    </div>
</template>

<style lang="scss">
    @import 'variables';

    .markdown {
        &__content > img {
            padding: 3rem;
            margin: 1rem 0;
            border: 1px solid $grey-lightest;
        }
    }
</style>

<script lang="ts">
    import Vue from 'vue';
    import marked from 'marked';
    import { sanitize } from 'dompurify';

    export default Vue.extend({
        data() {
            return {
                html: '',
            }
        },

        mounted(): void {  
            this.parse();
        },  

        methods: {
            parse(): void {
                const element = this.$refs.markdown as HTMLElement;
                const markdown = element.innerHTML;

                if (!markdown) {
                    return;
                }

                const trimmedMarkdown = this.deepTrim(markdown);
                const html = marked(trimmedMarkdown);
                
                this.html = sanitize(html);
            },

            deepTrim(content: string): string {
                return content
                    .split('\n')
                    .map((line: string) => line.trim())
                    .join('\n');
            }
        },
    })
</script>
