const { generatePosts } = require('../../../../lambda/posts');

module.exports = {
    blog: {
        posts: generatePosts(3),
    },
}
