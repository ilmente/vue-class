<template>
    <Layout>
        <Tabs>
            <Tab label="Same as first example" isActive>
                <SameAsFirstExample someText="This text comes from a prop!">
                    <template #top>
                        <p>
                            <em>This content is injected in the #top slot</em>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </template>

                    <template #default="{ text }">
                        <p>
                            Scoped slot: <strong>{{ text }}</strong>
                            <br>
                            <em>This content is injected in the #default slot</em>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </template>
                </SameAsFirstExample>
            </Tab>
            <Tab label="New example">
                <p>Work in progress...</p>
            </Tab>
        </Tabs>
    </Layout>
</template>

<script lang="ts">
    import Vue from 'vue';
    import Component from 'vue-class-component';
    import SameAsFirstExample from './SameAsFirstExample.vue';

    @Component({
        components: {
            SameAsFirstExample
        }
    })
    export default class extends Vue {}
</script>
