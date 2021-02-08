<template>
    <div class="field">
        <label class="label">{{label}}</label>
        <div class="control">
            <slot :label="label">
                <input 
                    class="input" 
                    type="text" 
                    :placeholder="label" 
                    v-model="internalValue"
                    @input="onInput" />
            </slot>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            label: {
                type: String,
                require: true,
            },

            value: {
                type: [String, Number],
                default: '',
            }
        },

        data() {
            return {
                internalValue: this.value
            }
        },

        methods: {
            onInput(event) {
                this.$emit('input', event.target.value);
            }
        }
    }
</script>
