const glob = require('fast-glob');
const { createResource } = require('./resource');
const { resources } = require('../config');

function crawl() {
    return glob
        .sync(resources.patterns, {
            followSymbolicLinks: false,
            absolute: false,
            onlyFiles: true,
        })
        .map(createResource);
}

module.exports = {
    crawl
}
