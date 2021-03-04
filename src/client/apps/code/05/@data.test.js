/**
 * https://jestjs.io/docs/en/getting-started
 */

const data = require('./@data');

test('emailList.list is empty array', () => {
    expect(data.emailList.list).toBeDefined();
    expect(data.emailList.list).toEqual([]);
});

test('messaging.notifications contains one notification', () => {
    expect(data.messaging.notifications).toBeDefined();
    expect(data.messaging.notifications).toHaveLength(1);
});
