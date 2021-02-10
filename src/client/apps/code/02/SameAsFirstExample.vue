<template>
    <div class="content">
        <h1>Same as first example, but in typescript...</h1>

        <slot name="top"></slot>

        <div class="field">
            <label class="label">1-way data binding</label>
            <div class="control">
                <input 
                    class="input" 
                    type="number" 
                    placeholder="1-way"
                    :value="oneWayNumber"
                    @input="onInput">
            </div>
            <p class="help">
                What you write here needs an event loop to update the variable 
                it's connected to
            </p>
        </div>

        <div class="field">
            <label class="label">2-way data binding</label>
            <div class="control">
                <input 
                    class="input" 
                    type="text" 
                    placeholder="2-way"
                    v-model="twoWayText">
            </div>
            <p class="help">
                What you write here updated directly the variable 
                it's connected to
            </p>
        </div>

        <slot :text="twoWayText">
            Default content
        </slot>

        <p>
            <code>v-for</code> on some props, data, computed and methods.
            Look at the console to spot the difference between
            computed and methods when it comes to caching.
        </p>

        <ul v-for="index in 3" :key="index">
            <li>1-way: <strong>{{oneWayNumber}}</strong></li>
            <li>1-way double (computed): <strong>{{double}}</strong></li>
            <li>2-way: <strong>{{twoWayText}}</strong></li>
            <li>2-way reverse (method): {{getReverse()}}</li>
        </ul>

        <label class="checkbox">
            <input type="checkbox" v-model="isBottomSlotVisible">
            Toggle #bottom slot
        </label>

        <slot name="bottom" v-if="isBottomSlotVisible">
            <p>
                This is the default content for the #bottom slot.
                Look what happen when you toggle the checkbox in terms 
                of computed/methods calls...
            </p>
        </slot>

        <p v-show="!isBottomSlotVisible"><em>Hidden...</em></p>
    </div>
</template>

<script lang="ts">
    import { Vue, Component, Prop, PropSync, Model } from 'vue-property-decorator';
    import { LogComputed, LogMethod } from 'decorators/log';

    @Component
    export default class extends Vue {
        @Prop({
            type: Number,
            required: true,
        })
        readonly initialNumber!: number;
        oneWayNumber: number = this.initialNumber;

        @Prop({
            type: String,
            default: 'Some text value...',
            validator: (value: string): boolean => value.length > 3,
        })
        readonly initialText!: string;
        twoWayText: string = this.initialText;

        isBottomSlotVisible: boolean = true;

        @LogComputed
        get double(): number {
            return this.oneWayNumber * 2;
        }
        
        created(): void {
            // look in the console to better understand the difference
            // in lifecycle
            console.log('created');
        }

        mounted(): void {
            // look in the console to better understand the difference
            // in lifecycle
            console.log('mounted');
        }

        onInput(event: Event): void {
            const element = event.currentTarget as HTMLInputElement
            this.oneWayNumber = parseInt(element.value);
        }

        @LogMethod
        getReverse(): string {
            return this.twoWayText
                .split('')
                .reverse()
                .join('');
        }
    }
</script>
