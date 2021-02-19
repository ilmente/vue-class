<template>
    <Layout contentStyle>
        <h2>A simple modal</h2>
        <p>
            This is just an app with a modal. Click on the button to open it.
            <br>
            If you reload the page while the modal is open, it will not disappear.
        </p>
        <p>
            <a class="button is-warning" :href="openModalHashbang">Open modal</a>
        </p>

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
            <button class="modal-close is-large" @click="onCloseModal"></button>
        </div>
    </Layout>
</template>

<script lang="ts">
    import { Vue, Component } from 'vue-property-decorator';

    const HASHBANG: string = '#!';
    const OPEN_MODAL_HASHBANG: string = `${HASHBANG}open-modal`;

    @Component({
        name: 'App',
    })
    export default class extends Vue {
        hash: string = window.location.hash;

        get openModalHashbang(): string {
            return OPEN_MODAL_HASHBANG;
        }

        get isModalOpen(): boolean {
            return this.hash === OPEN_MODAL_HASHBANG;
        }

        created() {
            window.addEventListener('hashchange', () => this.onHashChange());
        }

        onHashChange(): void {
            this.hash = window.location.hash;
        }

        onCloseModal(): void {
            window.location.hash = HASHBANG;
        }
    }
</script>
