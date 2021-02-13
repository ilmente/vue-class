const faker = require('faker');

function generatePosts(count) {
    return new Array(count)
        .fill({
            dislikes: 0,
        })
        .map(product => ({
            ...product,

            name: `${faker.name.firstName()} ${faker.name.lastName()}`,
            username: faker.internet.userName(),
            content: faker.commerce.productDescription(),
            imageSrc: faker.image.image(),
        }))
}

module.exports = {
    posts: generatePosts(3),
}
