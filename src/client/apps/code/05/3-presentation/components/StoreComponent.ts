import Vue from 'vue';
import { Store } from 'vuex';
import { RootState } from '../../2-connection/RootState';

export default class extends Vue {
    $store!: Store<RootState>;
}
