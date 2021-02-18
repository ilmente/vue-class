const faker = require('faker');

const generatePosts = exports.generatePosts = (count) => new Array(count)
    .fill({})
    .map(product => ({
        ...product,

        id: faker.random.uuid(),
        name: `${faker.name.firstName()} ${faker.name.lastName()}`,
        username: faker.internet.userName(),
        content: faker.commerce.productDescription(),
        imageSrc: faker.image.image(),
        dislikes: Math.floor(Math.random() * 5),
    }));

exports.handler = async () => {
    const posts = generatePosts(3);

    const delay = async () => new Promise(
        (resolve) => setTimeout(resolve, 3 * 1000)
    );

    await delay();

    return {
        statusCode: 200,
        body: JSON.stringify(posts),
    }
}
