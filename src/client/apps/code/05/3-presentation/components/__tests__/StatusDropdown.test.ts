import StatusDropdown from '../StatusDropdown.vue';
import { mount } from '@vue/test-utils';
import { EmailStatus } from '../../../1-data/typings/Email';
import { getStatusLabel } from '../../helpers/status';

const propsData = {
    value: EmailStatus.READ,
    isUpdating: false,
}

describe('StatusDropdown.vue', () => {
    const wrapper = mount(StatusDropdown, {
        propsData,
    });

    test('snapshot', () => {
        expect(wrapper.element).toMatchSnapshot();
    });

    test('has correct value', () => {
        const option = wrapper.find('.dropdown-item.is-active');
        expect(option.text()).toBe(getStatusLabel(propsData.value));
    });

    test('open the dropdown on click', async () => {
        const button = wrapper.find('button');
        expect(wrapper.classes()).not.toContain('is-active');
        await button.trigger('click');
        expect(wrapper.classes()).toContain('is-active');
    });

    test('emit beforeChange on click', async () => {
        const button = wrapper.find('button');
        await button.trigger('click');
        expect(wrapper.emitted().beforeChange).toBeTruthy();
    });
});
