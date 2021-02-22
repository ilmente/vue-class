<template>
    <section class="content">
        <h2>Login</h2>
        <div class="box">
            <div class="field">
                <label class="label">Username</label>
                <div class="control">
                    <input 
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
                        class="input" 
                        type="password" 
                        placeholder="Password works only if contained by the username" 
                        v-model="password">
                </div>
            </div>

            <div class="field">
                <p class="control">
                    <button class="button is-success" @click="onClick">
                        Login
                    </button>
                </p>
            </div>

            <p v-if="isLoginFailed" class="has-text-danger">
                🤬 Login failed
            </p>
        </div>
    </section>
</template>

<script lang="ts">
    import { Vue, Component } from 'vue-property-decorator';
    import { User, authenticate } from '@helpers/fake-auth';

    @Component({
        name: 'Login',
    })
    export default class extends Vue {
        username: string = '';
        password: string = '';
        isLoginFailed: boolean = false;

        onClick(): void {
            const user: User = authenticate(this.username, this.password);
            this.isLoginFailed = false;

            if (!user.isAuthenticated) {
                this.isLoginFailed = true;
                return;
            }
            
            const redirect = this.$route.query.redirect as string;
            this.$router.replace(redirect);
        }
    }
</script>
