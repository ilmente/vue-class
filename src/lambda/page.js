const faker = require('faker');

exports.handler = async () => {
    const random = Math.ceil(Math.random() * 10);
    const title = faker.commerce.productName();
    const content = faker.lorem.paragraphs();

    const delay = async () => new Promise(
        (resolve) => setTimeout(resolve, 2000)
    );

    await delay();

    if (random < 5) {
        return {
            statusCode: 404,
        }
    } 

    return {
        statusCode: 200,
        body: JSON.stringify({ 
            title,
            content,
        }),
    }
}
