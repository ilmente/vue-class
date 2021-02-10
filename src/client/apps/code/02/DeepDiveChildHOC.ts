import { hoc } from 'helpers/hoc';
import DeepDiveChildSuper from './DeepDiveChildSuper.vue';

export default hoc(DeepDiveChildSuper, {
    props: {
        superText: 'Hello! I\'m a (sort of) High Order Component!'
    },

    class: {
        'is-warning': true,
    }
})
