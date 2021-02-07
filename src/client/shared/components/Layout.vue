<template>
    <div>
        <header class="container is-max-desktop">
            <nav class="navbar" role="navigation">
                <div class="navbar-brand">
                    <a class="navbar-item" href="/"><Logo /></a>
                    <a class="navbar-item" href="/">Home</a>
                    <a 
                        role="button" 
                        :class="['navbar-burger', menuModifier]" 
                        @click="onBurgerClick">
                        <span></span>
                        <span></span>
                        <span></span>
                    </a>
                </div>

                <div :class="['navbar-menu', menuModifier]">
                    <div class="navbar-start">
                        <div 
                            class="navbar-item has-dropdown is-hoverable"
                            v-for="({label, resources}, index) in menu"
                            :key="`section-${index}`">
                            <a class="navbar-link">{{label}}</a>
                            <div class="navbar-dropdown">
                                <a 
                                    class="navbar-item"
                                    
                                    v-for="(resource, resourceIndex) in resources" 
                                    :key="`page-${resourceIndex}`" 
                                    :target="resource.external ? '_blank' : '_self'"
                                    :href="resource.url">
                                    {{resource.name}}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>

        <section class="hero is-medium is-primary">
            <div class="hero-body">
                <div class="container is-max-desktop">
                    <h1 class="title">{{ heading.title }}</h1>
                    <h2 class="subtitle" v-if="heading.subtitle">{{heading.subtitle}}</h2>
                </div>
            </div>
        </section>

        <main class="container is-max-desktop">
            <div class="my-5">
                <slot></slot>
            </div>
        </main>
    </div>
</template>

<style lang="scss">
    @import 'bulma/sass/utilities/_all.sass';
    /** 
     * custom vars here
     */
    @import 'bulma';
</style>

<script lang="ts">
    import Vue from 'vue';
    import Logo from '@components/Logo.vue';
    import { 
        ResourceMap,
        getResourceMap,
        getResourceFromUrl,
    } from '@helpers/resources';

    export default Vue.extend({
        components: {
            Logo
        },

        data() {
            return {
                isMenuOpen: false
            }
        },

        computed: {
            menu(): ResourceMap {
                return getResourceMap();
            },

            heading(): { title: string, subtitle: string } {
                const url = window.location.pathname;
                const resource = getResourceFromUrl(url);

                if (!resource) {
                    return {
                        title: 'Vue Class',
                        subtitle: ''
                    };
                }

                return {
                    title: resource.name,
                    subtitle: resource.domainLabel,
                };
            },

            menuModifier(): string {
                if (this.isMenuOpen) {
                    return 'is-active';
                }

                return '';
            }
        },

        methods: {
            onBurgerClick(): void {
                this.isMenuOpen = !this.isMenuOpen;
            }
        }
    });
</script>
