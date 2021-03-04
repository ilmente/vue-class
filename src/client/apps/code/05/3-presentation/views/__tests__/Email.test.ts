import { mount } from '@vue/test-utils'
import Email from '../Email.vue';
import { generateStoreContext, localVueWithRouter, router } from '@mock/local-vue';

const propsData = {
    emailId: '123',
}

describe('Email.vue', () => {
    let context: any;

    const getWrapper = () => mount(Email, {
        localVue: localVueWithRouter,
        router,
        store: context.store,
        propsData,
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

    test('call load on created and on route change (2 times)', async (done) => {
        const wrapper = getWrapper();
        wrapper.vm.$router.push('/email/2');

        // this will not work
        // expect(context.options.modules.email.actions.load).toHaveBeenCalledTimes(2);

        wrapper.vm.$nextTick(() => {
            expect(context.options.modules.email.actions.load).toHaveBeenCalledTimes(2);
            done();
        });
    });
});
