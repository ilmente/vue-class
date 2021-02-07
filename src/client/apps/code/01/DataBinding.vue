<template>
    <div>
        <slot name="top"></slot>
        <p>
            1-way
            <br>
            <input 
                v-bind:value="name" 
                v-on:input="onInput">
            <br>
            The input value is: {{ double }}
        </p>
        <hr>
        <p>
            2-way
            <br>
            <input v-model="twoWayVariable">
            <br>
            The input value is: {{ twoWayVariable }}
        </p>
        <p v-if="isFullnameVisible">
            if
            <br>
            Full name: {{ fullName }}
            Full name: {{ fullName }}
            Full name: {{ fullName }}
            Full name2: {{ getFullName() }}
            Full name2: {{ getFullName() }}
            Full name2: {{ getFullName() }}
        </p>
        <p v-else>
            else {{ fullName }}
        </p>
        <p v-show="!isFullnameVisible">
            show
            <br>
            Full name: {{ fullName }}
            Full name: {{ fullName }}
            Full name: {{ fullName }}
            Full name2: {{ getFullName() }}
            Full name2: {{ getFullName() }}
            Full name2: {{ getFullName() }}
        </p>
        <span v-for="(item, index) in items" :key="item">
            {{ item }}{{ index }}
        </span>
        <hr>
        <slot v-bind:data="fullName">
            Default content
        </slot>
    </div>
</template>

<script>
    export default {
        props: {
            myName: {
                type: String,
                default() {
                    return 'Alessandro';
                },
                validator(value) {
                    return value.length > 3;
                }
            },
            mySurname: String,
        },

        data() {
            return {
                oneWayVariable: 0,
                twoWayVariable: 'initial value',
                name: this.myName,
                surname: this.mySurname,
                items: [
                    1, 2, 3, 4
                ]
            }
        },

        computed: {
            double() {
                return this.oneWayVariable;
            },

            fullName() {
                const fullname = `${this.name} ${this.surname}`;
                console.log('computed', fullname)
                return fullname;
            },

            isFullnameVisible() {
                return this.name === 'Alessandro';
            }
        },

        created() {
            console.log('created');
        },

        mounted() {
            console.log('mounted');
        },

        methods: {
            onInput(event) {
                this.name = event.target.value;
            },

            getFullName() {
                const fullname = `${this.name} ${this.surname}`;
                console.log('method', fullname)
                return fullname;
            }
        },
    }
</script>
