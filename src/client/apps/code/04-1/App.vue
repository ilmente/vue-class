<template>
    <Layout>
        <div class="content">
            <h2>A simple modal</h2>
            <p>
                This is just an app with a modal. Click on the button to open it.
            </p>
            <p>
                <a class="button is-info" href="#open-modal">
                    Open modal (classic)
                </a>
                <button class="button is-danger" @click="onOpenModalClick">
                    Open modal (use hash query object)
                </button>
            </p>
        </div>
        
        <div class="content">
            <blockquote>
                📣 Everything here is persistent, no matter how many times you reload the page. 
                <br>
                If you change the url hash, elements will update.
            </blockquote>
        </div>

        <div class="columns content">
            <div class="column is-half">
                <h2>Hash</h2>
                <p>
                    With some magic hash becomes reactive.
                </p>
                <div class="field">
                    <label class="label">Value</label>
                    <div class="control">{{ hash || '--'}}</div>
                </div>
                <div class="field">
                    <label class="label">Input</label>
                    <div class="control">
                        <textarea class="textarea" v-model="hash"/>
                    </div>
                </div>
            </div>
            <div class="column is-half">
                <h2>Query object</h2>
                <p>
                    Try something like <code>key1=value&key2=123</code> in the input
                </p>
                <ul>
                    <li 
                        v-for="(value, key, index) in hashObject" 
                        :key="`hash-${index}`">
                        {{key}}: {{value || 'null'}}
                    </li>
                </ul>
            </div>
        </div>

        <div class="content">
            <hr>
            <h2>Routing</h2>
            <p>
                And with even more magic it becomes a routimg system.
            </p>
        </div>
    
        <div class="columns">
            <div class="column is-one-third">
                <aside class="menu">
                    <p class="menu-label">
                        Using hashbang
                    </p>
                    <ul class="menu-list">
                        <li>
                            <a :href="stringify({ 'page': 'home' })">
                                Home page
                            </a>
                        </li>
                        <li>
                            <a :href="stringify({ 'page': 'another', date: Date.now() })">
                                Another page
                            </a>
                        </li>
                    </ul>
                </aside>
            </div>
            <div class="column">
                <Home v-if="isCurrentPage('home')" />
                <Another v-else-if="isCurrentPage('another')" />
                <span v-else class="tag is-danger">No page loaded</span>
            </div>
        </div>

        <div class="modal" :class="isModalOpen && 'is-active'">
            <div class="modal-background"></div>
            <div class="modal-content">
                <div class="notification is-warning">
                    <strong>Even if you reload, this will stay open.</strong>
                    Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit lorem ipsum dolor. 
                    Pellentesque risus mi, 
                    tempus quis placerat ut, porta nec nulla. 
                    Vestibulum rhoncus ac ex sit amet fringilla.
                </div>
            </div>
            <button class="modal-close is-large" @click="onCloseModalClick"></button>
        </div>
    </Layout>
</template>

<script lang="ts">
    import { Component, Mixins } from 'vue-property-decorator';
    import HashMixin from '@mixins/HashMixin';
    import Home from './views/Home.vue';
    import Another from './views/Another.vue';

    @Component({
        name: 'App',
        components: {
            Home,
            Another,
        },
    })   
    export default class extends Mixins(HashMixin) {
        get isModalOpen(): boolean {
            return this.hash === '#open-modal'
                || this.hashObject.modal === 'open';
        }

        onOpenModalClick(): void {
            this.setHashObject({
                modal: 'open',
            })
        }

        onCloseModalClick(): void {
            if (!this.hashObject.modal) {
                this.hash = '#';
                return;
            }

            this.setHashObject({
                modal: 'close',
            })
        }

        isCurrentPage(page: string): boolean {
            return this.hashObject.page === page;
        }
    }
</script>
