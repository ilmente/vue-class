<template>
    <section class="deep-dive-parent content">
        <h1>
            Jump! Head first into 
            <code>@Decorators</code> 
            and TS <em>stuff</em>
        </h1>

        <h3>👨‍🦳 Parent component</h3>
        <div class="field">
            <label class="label">@PropSync usage</label>
            <div class="control">
                <input 
                    class="input" 
                    v-model="syncText">
            </div>
            <p class="help">
                What you write here is sync-ed with the child mirror input
            </p>
        </div>
        
        <template v-for="index in 2">
            <hr :key="`dive-deep-separation-${index}`">
            <DeepDiveChild 
                :text.sync="syncText" 
                superText="SUPER TEXT!" 
                :key="`dive-deep-child-${index}`">
                <template #mirror="{ syncTextFromParent }">
                    Mirror in scoped slot:
                    <strong>{{ syncTextFromParent }}</strong>
                </template>
            </DeepDiveChild>
        </template>
        <hr>
        
        <h3>🧑‍🦳 Back to parent component</h3>
        <div class="deep-dive-parent__log has-background-danger-light p-3">
            <strong>Text log</strong>
            <br>
            <em>Type in any @PropSync input and see...</em>
            <ol>
                <li v-for="({ from, to }, index) in textLogReversed" :key="`text-log-${index}`">
                    from <strong>{{ from }}</strong> to <strong>{{ to }}</strong>
                </li>
            </ol>
        </div>

        <hr>
        <h3>🏡 Family matters...</h3>

        <div class="box">
            <p>
                <button 
                    class="button is-danger is-small is-pulled-right" 
                    @click="onRestartClick">
                    Restart countdown
                </button>
                ⏰ Countdown from mixin: 
                <strong>{{ this.remainingSeconds }}</strong>
            </p>
            <blockquote class="has-text-danger">
                ⚠️ Use mixins resposably, please!
            </blockquote>
        </div>

        <div class="columns">
            <div class="column is-half">
                <DeepDiveChildSuper />
            </div>
            <div class="column is-half">
                <DeepDiveChildHOC />
            </div>
        </div>
    </section>
</template>

<style lang="scss">
    $_logHeight: 10rem;

    .deep-dive-parent {
        &__log {
            height: $_logHeight;
            max-height: $_logHeight;
            overflow: auto;
        }
    }
</style>

<script lang="ts">
    import { Component, Watch, Emit, Mixins } from 'vue-property-decorator';
    import DeepDiveChild from './DeepDiveChild.vue';
    import DeepDiveChildSuper from './DeepDiveChildSuper.vue';
    import DeepDiveChildHOC from './DeepDiveChildHOC';
    import { CountdownMixin } from './CountdownMixin';

    interface TextLogEntry {
        from: string;
        to: string;
    }

    @Component({
        components: {
            DeepDiveChild,
            DeepDiveChildSuper,
            DeepDiveChildHOC,
        }
    }) 
    export default class extends Mixins(CountdownMixin) {
        syncText: string = 'Initial text...';
        textLog: TextLogEntry[] = [];

        get textLogReversed(): TextLogEntry[] {
            return [...this.textLog].reverse();
        }

        @Watch('syncText')
        onTextChanged(value: string, oldValue: string): void {
            this.textLog.push({ from: oldValue, to: value, });
        }

        @Emit('restart-click')
        onRestartClick(): void {
            this.restart();
        }

        mounted(): void {
            console.log('[mounted parent] I\'m gonna be executed, regardless of the mixin');

            /**
             * 
             * this method is private in CountdownMixin
             * if you try to uncomment it, the build will fail
             * 
             */
            // this.start();
        }
    }
</script>
