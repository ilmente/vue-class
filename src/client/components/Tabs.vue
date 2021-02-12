<template>
    <div>
        <div class="tabs is-boxed">
            <ul>
                <li 
                    v-for="(tab, index) in tabs" 
                    :key="`tab-label-${index}`"
                    :class="tab.isVisible && 'is-active'"
                    @click="onClick(tab)">
                    <a>{{tab.label}}</a>
                </li>
            </ul>
        </div>
        <slot></slot>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import Component from 'vue-class-component';
    import Tab from 'components/Tab.vue';

    @Component({
        name: 'Tabs',
    })
    export default class extends Vue {
        protected tabs: Tab[] = [];

        registerChild(tab: Tab): void {
            this.tabs.push(tab);
        }

        protected onClick(tab: Tab): void {
            this
                .tabs
                .filter(tab => tab.isVisible)
                .forEach(tab => tab.isVisible = false);

            tab.isVisible = true;
        }
    }
</script>
