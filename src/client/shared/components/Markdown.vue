<template>
    <div>                   
        <div ref="markdown" style="display:none;"><slot/></div>
        <section class="content" v-html="html"></section>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import snarkdown from 'snarkdown';
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
                const html = snarkdown(trimmedMarkdown);
                
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
