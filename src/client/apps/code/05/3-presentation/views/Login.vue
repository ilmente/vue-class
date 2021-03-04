<template>
    <OneColLayout class="login">
        <div class="login__form box content">
            <h2>Login</h2>
            <div class="field">
                <label class="label">Username</label>
                <div class="control">
                    <input 
                        data-qa-username
                        class="input" 
                        type="text" 
                        placeholder="Any username here" 
                        v-model="username">
                </div>
            </div>

            <div class="field">
                <label class="label">Password</label>
                <div class="control">
                    <input 
                        data-qa-password
                        class="input" 
                        type="password" 
                        placeholder="Password works only if contained by the username" 
                        v-model="password">
                </div>
            </div>

            <div class="field">
                <p class="control">
                    <button data-qa-submit class="button is-success" @click="onClick">
                        Login
                    </button>
                </p>
            </div>

            <p v-if="isLoginFailed" class="has-text-danger">
                🤬 Login failed
            </p>
        </div>
    </OneColLayout>
</template>

<style lang="scss">
    @use 'variables';

    $_height: 80vh;

    .login {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;

        &__form {
            width: 35rem;
        }
    }
</style>

<script lang="ts">
    import { Vue, Component, Inject } from 'vue-property-decorator';
    import { User, authenticate, isAuthenticated } from '@helpers/fake-auth';
    import OneColLayout from '../layouts/OneColLayout.vue';
    import { RouteNameType } from '../../2-connection/Router';

    @Component({
        name: 'Login',
        components: {
            OneColLayout,
        }
    })
    export default class extends Vue {
        @Inject() RouteName!: RouteNameType;

        username: string = '';
        password: string = '';
        isLoginFailed: boolean = false;

        created(): void {
            if (!isAuthenticated()) {
                return;
            }

            this.$router.replace({ name: this.RouteName.INBOX });
        }

        onClick(): void {
            const user: User = authenticate(this.username, this.password);
            this.isLoginFailed = false;

            if (!user.isAuthenticated) {
                this.isLoginFailed = true;
                return;
            }
            
            const redirect = this.$route.query.redirect as string;

            if (Boolean(redirect)) {
                this.$router.replace(redirect);
                return;
            }
            
            this.$router.replace({ name: this.RouteName.INBOX });
        }
    }
</script>
