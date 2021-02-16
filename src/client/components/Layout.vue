<template>
    <div>
        <header class="container is-max-desktop">
            <nav class="navbar" role="navigation">
                <div class="navbar-brand">
                    <a class="navbar-item" href="/"><Logo /></a>
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
                        <template v-for="(item, index) in sitemap">
                            <a 
                                class="navbar-item" 
                                v-if="!item.children"
                                :key="`section-${index}`"
                                :href="item.url">
                                {{item.title}}
                            </a>
                            <div 
                                class="navbar-item has-dropdown is-hoverable"
                                v-else
                                :key="`section-${index}`">
                                <a class="navbar-link">{{item.title}}</a>
                                <div class="navbar-dropdown">
                                    <a 
                                        class="navbar-item"
                                        v-for="(child, childIndex) in item.children" 
                                        :key="`page-${childIndex}`" 
                                        :target="child.isExternal ? '_blank' : '_self'"
                                        :href="child.url">
                                        {{child.title}}
                                    </a>
                                </div>
                            </div>
                        </template>
                    </div>
                </div>
            </nav>
        </header>

        <section class="hero is-medium is-primary">
            <div class="hero-body">
                <div class="container is-max-desktop">
                    <h1 class="title">{{ item.title }}</h1>
                    <h2 class="subtitle" v-if="item.subtitle">{{item.subtitle}}</h2>
                </div>
            </div>
        </section>

        <main class="container is-max-desktop">
            <div class="my-5" :class="contentStyle && 'content'">
                <slot v-bind="item"></slot>
            </div>
        </main>

        <footer class="footer">
            <div class="content has-text-centered">
                <h6>🖥 Vue Class</h6>
                <p>
                    This <a href="https://github.com/ilmente/vue-class" target="_blank">project</a> 
                    is maintained with ❤️ by <a href="https://ilmente.com" target="_blank">ilmente</a> 
                    <br>
                    <a href="https://github.com/ilmente/vue-class/blob/master/LICENSE" target="_blank">MIT</a> license
                </p>
                <small class="has-text-grey-light">
                    Version {{platform.version}} - Build {{platform.build}}
                </small>
            </div>
        </footer>
    </div>
</template>

<style lang="scss">
    @import 'variables';
    @import 'bulma';
</style>

<script lang="ts">
    import Vue, { PropOptions } from 'vue';
    import Logo from 'components/Logo.vue';
    import { NavigationItem } from 'typings/navigation';
    import { Platform } from 'typings/state';

    export default Vue.extend({
        components: {
            Logo
        },

        props: {
            contentStyle: {
                type: Boolean,
                default: false,
            } as PropOptions<boolean>
        },

        data() {
            return {
                isMenuOpen: false
            }
        },

        computed: {
            sitemap(): NavigationItem[] {
                return window.__INITIAL_STATE__.navigation.sitemap;
            },

            item(): NavigationItem {
                return window.__INITIAL_STATE__.navigation.current;
            },

            platform(): Platform {
                return window.__INITIAL_STATE__.platform;
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
