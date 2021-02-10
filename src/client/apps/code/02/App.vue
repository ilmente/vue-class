<template>
    <Layout>
        <Tabs>
            <Tab label="Same as first example" isActive>
                <SameAsFirstExample 
                    :initialNumber="10" 
                    initialText="This text comes from a prop!">
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
            <Tab label="A deeper dive">
                <DeepDiveParent 
                    :countdown="countdown" 
                    @restart-click="onRestartClick" />
            </Tab>
        </Tabs>
    </Layout>
</template>

<script lang="ts">
    import { Vue, Component } from 'vue-property-decorator';
    import SameAsFirstExample from './SameAsFirstExample.vue';
    import DeepDiveParent from './DeepDiveParent.vue';

    @Component({
        components: {
            SameAsFirstExample,
            DeepDiveParent,
        }
    })
    export default class extends Vue {
        countdown: number = 10;

        onRestartClick(): void {
            const randomNumber = Math.ceil(Math.random() * 10);
            this.countdown = randomNumber;
        }
    }
</script>
