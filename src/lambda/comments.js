exports.handler = async () => {
    const faker = require('faker');
    const count = Math.ceil(Math.random() * 10);

    if (count < 3) {
        return {
            statusCode: 500,
            body: JSON.stringify({
                errorMessage: 'Whoops! Nice try! Reload me.'
            }),
        }
    }

    const comments = new Array(count)
        .fill({})
        .map(comment => ({
            ...comment,
            
            avatar: faker.image.imageUrl(),
            name: `${faker.name.firstName()} ${faker.name.lastName()}`,
            username: faker.internet.userName(),
            message: faker.lorem.text(),
        }));

    
    const delay = async () => new Promise(
        (resolve) => setTimeout(resolve, count * 300)
    );

    await delay();

    return {
        statusCode: 200,
        body: JSON.stringify({
            comments,
            count,
        })
    }
}
