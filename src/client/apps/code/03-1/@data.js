const { generatePosts } = require('../../../../lambda/posts');

module.exports = {
    posts: generatePosts(3),
}
