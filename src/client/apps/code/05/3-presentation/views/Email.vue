<template>
    <div class="email p-6">
        <div v-if="isLoading" class="email__progress">
            <progress 
                class="progress is-small is-primary" 
                max="100">
            </progress>
        </div>
        <article v-else-if="email">
            <StatusDropdown 
                class="is-pulled-right"
                :isUpdating="isUpdating"
                :value="email.status"  
                @beforeChange="onStatusBeforeChange"
                @change="onStatusChange" />

            <h1 class="title">{{ email.subject }}</h1>
            <h2 class="subtitle">
                <a>{{ email.sender }}</a>, {{ timestamp }}
            </h2>
            <hr>
            <div class="is-size-4 content" v-html="content"></div>
        </article>
        <div v-else class="email__error">
            <span class="email__icon">🤬 500</span>
        </div>
    </div>
</template>

<style lang="scss">
    @use 'variables';

    .email {
        position: relative;
        height: 100%;
        overflow: auto;

        &__progress,
        &__error {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100%;
        }

        &__icon {
            font-size: 10rem;
        }
    }
</style>

<script lang="ts">
    import { Component, Prop, Watch } from 'vue-property-decorator';
    import { Email, EmailStatus } from '../../1-data/typings/Email';;
    import StoreComponent from '../components/StoreComponent';
    import { getRelativeDate } from '../helpers/date';
    import StatusDropdown from '../components/StatusDropdown.vue';

    const DEFAULT_TIMEOUT = 1500; 

    @Component({
        name: 'Email',
        components: {
            StatusDropdown,
        }
    })
    export default class extends StoreComponent {
        @Prop({ type: String, required: true }) emailId!: string;
        isUpdating: boolean = false;
        timeoutId: ReturnType<typeof setTimeout> | null = null;

        get isLoading(): boolean {
            return this.$store.state.messaging.isLoading && !this.isUpdating;
        }

        get email(): Email | null {
            if (!this.$store.getters['email/exists']) {
                return null;
            }
            
            return this.$store.state.email.current;
        }

        get content(): string {
            return this.$store.getters['email/content'];
        }

        get timestamp(): string {
            return getRelativeDate(this.$store.state.email.current?.timestamp);
        }

        async created(): Promise<void> {
            await this.$store.dispatch('email/load', this.emailId);
            await this.autoUpdateStatus();
        }

        onStatusBeforeChange(): void {
            this.clearAutoUpdateStatus();
        }

        async onStatusChange(status: EmailStatus): Promise<void> {
            this.clearAutoUpdateStatus();
            
            await this.updateStatus(status);
        }

        @Watch('$route')
        async onRouteChange(): Promise<void> {
            this.clearAutoUpdateStatus();

            await this.$store.dispatch('email/load', this.emailId);
            await this.autoUpdateStatus();
        }

        clearAutoUpdateStatus(): void {
            if (!this.timeoutId) {
                return;
            }

            clearTimeout(this.timeoutId);
        }

        async autoUpdateStatus(): Promise<void> {
            if (this.email?.status !== EmailStatus.UNREAD) {
                return;
            }

            this.timeoutId = setTimeout(async () => {
                await this.updateStatus(EmailStatus.READ)
            }, DEFAULT_TIMEOUT);
        }

        async updateStatus(status: EmailStatus): Promise<void> {
            this.isUpdating = true;

            await this.$store.dispatch('email/updateEmailStatus', {
                id: this.email?.id, 
                status,
            });

            this.isUpdating = false;
        }
    }
</script>
