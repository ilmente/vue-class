const posts = [
    {
        "id": "cbd77147-f70c-4fbc-9afb-89d17daa7a24",
        "name": "Asa Heller",
        "username": "Savannah_Reinger39",
        "content": "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
        "imageSrc": "http://placeimg.com/640/480/animals",
        "dislikes": 2
    },
    {
        "id": "89e408f3-cc3f-43e3-b8aa-d1a24eb69632",
        "name": "Owen Marquardt",
        "username": "Arthur_Runte",
        "content": "The Football Is Good For Training And Recreational Purposes",
        "imageSrc": "http://placeimg.com/640/480/fashion",
        "dislikes": 3
    },
    {
        "id": "385fa383-2308-4345-8526-47295e598205",
        "name": "Krista Lebsack",
        "username": "Osborne_Quigley",
        "content": "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
        "imageSrc": "http://placeimg.com/640/480/animals",
        "dislikes": 2
    }
];

exports.handler = async ({ httpMethod, body }) => {
    const delay = async () => new Promise(
        (resolve) => setTimeout(resolve, 1000)
    );

    if (httpMethod === 'PATCH') {
        const { id } = JSON.parse(body);
        const post = posts.find(post => post.id === id);
        post.dislikes += 1;

        return {
            statusCode: 200,
            body: JSON.stringify(post),
        }
    }

    await delay();

    return {
        statusCode: 200,
        body: JSON.stringify(posts),
    }
}
