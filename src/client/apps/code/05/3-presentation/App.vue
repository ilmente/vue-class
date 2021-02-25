<template>
    <Layout fullWidth>
        <div class="app">
            <nav class="app__navigation navbar my-0 py-0">
                <div class="navbar-brand">
                    <router-link class="navbar-item" to="/">
                        <span class="is-size-2 mr-2">📬</span> 
                        <strong>You've got mail</strong>
                    </router-link>
                </div>

                <div class="navbar-end">
                    <div class="navbar-item">
                        <div v-if="isAuthenticated()" class="field is-grouped">
                            <p class="control">
                                <router-link 
                                    class="button is-light is-primary" 
                                    :to="{ name: RouteName.INBOX }">
                                    📥 Inbox
                                </router-link>
                            </p>
                            <p class="control">
                                <label class="button checkbox is-light is-danger">
                                    <input type="checkbox" v-model="isSpamOnly">
                                    Show only spam
                                </label>
                            </p>
                            <p class="control">
                                <router-link 
                                    class="button is-light is-info" 
                                    :to="{ name: RouteName.SETTINGS }">
                                    ⚙️ Settings
                                </router-link>
                            </p>
                            <p class="control">
                                <router-link 
                                    class="button is-light is-info" 
                                    :to="{ name: RouteName.LOGOUT }">
                                    👋 Logout
                                </router-link>
                            </p>
                        </div>
                        <div v-else class="field is-grouped">
                            <p class="control">
                                <router-link 
                                    class="button is-light is-info" 
                                    :to="{ name: RouteName.LOGIN }">
                                    🔒 Login
                                </router-link>
                            </p>
                        </div>
                    </div>
                </div>
            </nav>

            <main class="app__main">
                <router-view />
            </main>

            <div class="app__notifications">
                <Notification 
                    v-for="(notification, index) in notifications" 
                    :key="`notification-${index}`"
                    :data="notification" />
            </div>
        </div>

        <DataViewer />
    </Layout>
</template>

<style lang="scss">
    @use 'variables';

    $_navigation-height: 5vh;
    $_main-height: 60vh;

    .app {
        position: relative;
        border: 1px solid variables.$grey-lightest;
        overflow: hidden;

        &__navigation {
            height: $_navigation-height;
            background-color: variables.$white-bis;
            border-bottom: 1px solid variables.$grey-lightest;
        }

        &__main {
            height: $_main-height;
        }

        &__notifications {
            position: absolute;
            bottom: 1rem;
            right: 1rem;
            width: 25rem;
        }
    }
</style>

<script lang="ts">
    import { Vue, Component, Provide, Watch } from 'vue-property-decorator';
    import { isAuthenticated } from '@helpers/fake-auth';
    import { RouteName, RouteNameType } from '../2-connection/Router';
    import { Notification as MessagingNotification } from '../1-data/typings/Notification';
    import Notification from './components/Notification.vue';

    @Component({
        name: 'App',
        components: {
            Notification,
        }
    })
    export default class extends Vue {
        @Provide() RouteName: RouteNameType = RouteName;
        isSpamOnly: boolean = false;

        get notifications(): MessagingNotification[] {
            return this.$store.state.messaging.notifications;
        }

        isAuthenticated(): boolean {
            return isAuthenticated();
        }

        @Watch('isSpamOnly')
        async onSpamOnlyChange(): Promise<void> {
            this.$store.dispatch('emailList/setSpamOnly', this.isSpamOnly);
        }
    }
</script>
