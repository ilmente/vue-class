import Notification from '../Notification.vue';
import { mount } from '@vue/test-utils';
import { Notification as INotification, NotificationType } from '../../../1-data/typings/Notification';

const notification: INotification = {
    content: 'This is a notification',
    type: NotificationType.Success,
}

const propsData = {
    data: notification,
}

describe('Notification.vue', () => {
    const wrapper = mount(Notification, {
        propsData,
    });

    test('snapshot', () => {
        expect(wrapper.element).toMatchSnapshot();
    });

    test('contains the right content', () => {
        const content = wrapper.find('.notification__content');
        expect(content.text()).toBe(notification.content);
    });

    test('display the right type', () => {
        const container = wrapper.find('.notification');
        expect(container.classes()).toContain(`is-${notification.type}`);
    });
});
