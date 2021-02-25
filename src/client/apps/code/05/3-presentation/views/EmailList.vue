<template>
    <div class="email-list">
        <ul ref="emailListContainer">
            <li
                class="email-list__item"
                v-for="(info, index) in list" 
                :key="`email-info-${index}`">
                <router-link 
                    class="email-list__link p-3"
                    active-class="has-background-white"
                    :to="{ name: RouteName.EMAIL, params: { id: info.id } }">
                    <strong class="is-size-6 has-text-grey-dark">{{ info.subject }}</strong>
                    <span class="tag is-primary is-pulled-right" :class="getStatusModifier(info.status)">
                        {{ getStatusLabel(info.status) }}
                    </span>
                    <br>
                    <a class="is-size-7">{{ info.sender }}</a>
                    <br>
                    <span class="is-size-7 has-text-grey">{{ getRelativeDate(info.timestamp) }}</span>
                </router-link>
            </li>
        </ul>
        <div v-if="isLoading" class="p-5">
            <progress 
                class="progress is-small is-primary" 
                max="100">
            </progress>
        </div>
    </div>
</template>

<style lang="scss">
    @use 'variables';

    .email-list {
        &__item {
            display: block;
            border-bottom: 1px solid variables.$grey-lightest;
        }

        &__link {
            display: block;
            line-height: 1.3;
        }
    }
</style>

<script lang="ts">
    import { Component, Inject, Watch, Ref } from 'vue-property-decorator';
    import { EmailInfo } from '../../1-data/typings/Email';
    import { RouteNameType } from '../../2-connection/Router';
    import StoreComponent from '../components/StoreComponent';
    import { getRelativeDate } from '../helpers/date';
    import { getStatusLabel, getStatusModifier } from '../helpers/status';

    @Component({
        name: 'EmailList',
        methods: {
            getRelativeDate,
            getStatusLabel,
            getStatusModifier,
        }
    })
    export default class EmailList extends StoreComponent {
        @Inject() readonly RouteName!: RouteNameType;
        @Ref() emailListContainer!: HTMLDivElement;

        get list(): EmailInfo[] {
            return this.$store.getters['emailList/filteredList'];
        }

        get isSpamOnly(): boolean {
            return this.$store.state.emailList.isSpamOnly;
        }

        get isLoading(): boolean {
            return this.$store.state.messaging.isLoading;
        }

        async created(): Promise<void> {
            this.$store.dispatch('emailList/loadAll');
        }

        @Watch('isSpamOnly') 
        onSpamOnlyChange() {
            this.emailListContainer.scrollIntoView({ 
                behavior: 'smooth' 
            });
        }
    }
</script>
