import { mount } from '@vue/test-utils'
import Email from '../Email.vue';
import { generateStoreContext, localVue, router } from '@test/local-vue';

const propsData = {
    emailId: '123',
}

const mocks = {
    $route: {
        path: '/emails/1',
    }
}

describe('Email.vue', () => {
    let context: any;

    const getWrapper = () => mount(Email, {
        localVue,
        store: context.store,
        propsData,
        data: () => mocks,
    });
    
    beforeEach(() => {
        context = generateStoreContext();
    });

    test('snapshot', () => {
        const wrapper = getWrapper();
        expect(wrapper.element).toMatchSnapshot();
    });

    test('call load on created', () => {
        getWrapper();
        expect(context.options.modules.email.actions.load).toHaveBeenCalledTimes(1);
    });

    test('call load on created and on route change', async (done) => {
        const wrapper = getWrapper();
        wrapper.vm.$options.methods?.onRouteChange.call(wrapper.vm);

        wrapper.vm.$nextTick(() => {
            expect(context.options.modules.email.actions.load).toHaveBeenCalledTimes(2);
            done();
        });
    });
});
