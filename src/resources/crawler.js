const glob = require('fast-glob');
const { createResource } = require('./resource');
const { resourcePatterns } = require('../config');

function crawl() {
    return glob
        .sync(resourcePatterns, {
            followSymbolicLinks: false,
            absolute: false,
            onlyFiles: true,
        })
        .map(createResource);
}

module.exports = {
    crawl
}
