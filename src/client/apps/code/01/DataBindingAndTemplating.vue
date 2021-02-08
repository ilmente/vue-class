<template>
    <div>
        <h1>Data binding and templating</h1>

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
            </p>
        </slot>

        <p v-show="!isBottomSlotVisible"><em>Hidden...</em></p>
    </div>
</template>

<script>
    export default {
        props: {
            someText: {
                type: String,
                default() {
                    return 'Some text value...';
                },
                validator(value) {
                    return value.length > 3;
                }
            },
        },

        data() {
            return {
                oneWayNumber: 0,
                twoWayText: this.someText,
                isBottomSlotVisible: true,
            }
        },

        computed: {
            double() {
                const double = this.oneWayNumber * 2;
                console.log('computed:', double);
                return double;
            },
        },

        created() {
            // look in the console to better understand the difference
            // in lifecycle
            console.log('created');
        },

        mounted() {
            // look in the console to better understand the difference
            // in lifecycle
            console.log('mounted');
        },

        methods: {
            onInput(event) {
                this.oneWayNumber = event.target.value;
            },

            getReverse() {
                const reverse = this.twoWayText
                    .split('')
                    .reverse()
                    .join('');

                console.log('method:', reverse);
                return reverse;
            },
        },
    }
</script>
