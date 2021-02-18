const { generatePosts } = require('../../../../lambda/posts-31');

module.exports = {
    posts: generatePosts(3),
}
