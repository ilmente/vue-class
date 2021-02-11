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
            <Tab label="A quick note on scoped styles">
                <Styled>
                    <p>
                        <strong>
                            This is the slot content, inside the element and within a strong tag.
                            As you can see, the text is bold and green - or is it?
                        </strong>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                        tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <StyledSub>
                        <p>
                            Again, I'm in a slot, but this time in sub-component.
                            <strong>
                                This bold text is inside the main style component,
                                but wrapped in a sub-component - are you following me?
                                Problem is, this should be green, but it's not.
                                If you click though, everything becomes red...
                            </strong> 
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                            tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </StyledSub>
                </Styled>
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
    import Styled from './Styled.vue';
    import StyledSub from './StyledSub.vue';
    import DeepDiveParent from './DeepDiveParent.vue';

    @Component({
        components: {
            SameAsFirstExample,
            Styled,
            StyledSub,
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
