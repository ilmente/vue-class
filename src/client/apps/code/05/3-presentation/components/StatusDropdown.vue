<template>
    <div class="dropdown is-right" :class="isOpen && 'is-active'">
        <div class="dropdown-trigger">
            <button 
                class="button" 
                :class="getStatusModifier(status)" 
                @click="onDropdownClick" 
                :disabled="isUpdating">
                <span v-if="isUpdating">Updating...</span>
                <span v-else>{{getStatusLabel(status)}}</span>
            </button>
        </div>
        <div class="dropdown-menu" id="dropdown-menu" role="menu">
            <div class="dropdown-content">
                <a
                    class="dropdown-item" 
                    v-for="(value, index) in statusList" 
                    :key="`status-${index}`"
                    :class="isActive(value) && 'is-active'"
                    @click="onDropdownItemClick(value)">
                    {{getStatusLabel(value)}}
                </a>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { Vue, Component, Prop, ModelSync } from 'vue-property-decorator';
    import { EmailStatus } from '../../1-data/typings/Email';
    import { getStatusLabel, getStatusModifier } from '../helpers/status';

    @Component({
        name: 'StatusDropdown',
        methods: {
            getStatusLabel,
            getStatusModifier,
        }
    })
    export default class extends Vue {
        @ModelSync('value', 'change', { type: String, default: EmailStatus.UNREAD })
        status!: EmailStatus;

        @Prop({ type: Boolean, default: false }) 
        isUpdating!: boolean;

        isOpen: boolean = false;

        get statusList() {
            return EmailStatus;
        }

        isActive(status: EmailStatus): boolean {
            return this.status === status;
        }

        onDropdownClick(): void {
            this.isOpen = !this.isOpen;
        }

        onDropdownItemClick(status: EmailStatus): void {
            this.isOpen = false;
            this.status = status;
        }
    }
</script>
