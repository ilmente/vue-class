const faker = require('faker');
const sortBy = require('lodash/sortBy');
const random = require('lodash/random');
const omit = require('lodash/omit');
const isUndefined = require('lodash/isUndefined');

const EMAIL_STATUS = ['unread', 'read', 'spam'];

const generateEmails = exports.generateEmails = (count) => new Array(count)
    .fill({})
    .map(email => ({
        ...email,

        id: faker.random.uuid(),
        sender: faker.internet.exampleEmail(),
        subject: faker.commerce.productName(),
        timestamp: `${faker.date.recent()}`,
        content: faker.lorem.paragraphs(),
        status: EMAIL_STATUS[random(0, EMAIL_STATUS.length - 1)],
    }));

const createResponse = (body, code = 200) => ({
    statusCode: code,
    body: JSON.stringify(body),
});

const emails = sortBy(generateEmails(50), [
    'timestamp',
    'subject',
]).reverse();

exports.handler = async ({ httpMethod, body, queryStringParameters }) => {
    await (async () => new Promise(
        (resolve) => setTimeout(resolve, 2000)
    ))();

    const isGet = httpMethod === 'GET';
    const isPatch = httpMethod === 'PATCH';

    if (isGet && isUndefined(queryStringParameters.id)) {
        return createResponse(emails.map(email => omit(email, 'content')));
    }

    const data = isPatch ? JSON.parse(body) : {};
    const id = isGet ? queryStringParameters.id : data.id;

    if (!id) {
        return createResponse({ error: 'Wrong email ID provided' }, 500);
    }

    const email = emails.find(email => email.id === id);

    if (!email) {
        return createResponse({ error: 'Email not found' }, 404);
    }

    if (isPatch) {
        const { status } = data;

        if (!status || !EMAIL_STATUS.includes(status)) {
            return createResponse({ error: 'Wrong email status provided' }, 500);
        }

        email.status = status;
    }

    return createResponse(email);
}
