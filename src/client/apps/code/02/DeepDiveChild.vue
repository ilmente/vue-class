<template>
    <section class="pl-6">
        <h3>👶 Child component</h3>
        <div class="columns level">
            <div class="column is-half level-left">
                <div class="field">
                    <label class="label">@PropSync mirror</label>
                    <div class="control">
                        <input 
                            class="input" 
                            v-model="syncTextFromParent">
                    </div>
                    <p class="help">
                        What you write here is sync-ed with the parent mirror input
                    </p>
                </div>
            </div>
            <div class="column is-half level-right">
                <slot name="mirror" :syncTextFromParent="syncTextFromParent"></slot>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
    import { Component, PropSync } from 'vue-property-decorator';
    import DeepDiveChildSuper from './DeepDiveChildSuper.vue';

    @Component
    export default class extends DeepDiveChildSuper {
        @PropSync('text', {
            type: String,
            required: true,
        })
        syncTextFromParent!: string;

        mounted(): void {
            console.log('[mounted child]', this.superText);
        }
    }
</script>
