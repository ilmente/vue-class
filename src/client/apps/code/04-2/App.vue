<template>
    <Layout>
        <div class="columns">
            <div class="column is-one-quarter">
                <aside class="menu">
                    <p class="menu-label">
                        Using vue-router
                    </p>
                    <ul class="menu-list">
                        <li><router-link to="/">Home</router-link></li>
                        <li><router-link to="/foo">Foo</router-link></li>
                    </ul>
                </aside>
            </div>
            <div class="column">
                <router-view></router-view>
            </div>
        </div>
    </Layout>
</template>

<script lang="ts">
    import { Vue, Component } from 'vue-property-decorator';

    @Component({
        name: 'App',
    })
    export default class extends Vue {

    }
</script>
