const { existsSync, readFileSync } = require('fs');
const { join, basename, dirname } = require('path');
const { labels } = require('../config');

const root = process.cwd();

function clean(value) {
    return value.replace(/(index\.(js|ts)|\.md)/i, '');
}

function loadFile(path, name) {
    const filename = join(path, name);

    if (!existsSync(filename)) {
        return {};
    }

    return require(filename);
}

function createResource(path) {
    const fullPath = join(root, path);
    const dir = dirname(join(root, path));
    const name = basename(clean(path));
    const domain = basename(dirname(clean(path)));
    const entry = join(domain, name);
    const url = join('/', entry);
    const isMarkdown = /\.md?/.test(fullPath);

    const resource = {
        domain,
        domainLabel: labels[domain],
        path,
        fullPath,
        name,
        entry,
        url,
        base: url,
        meta: loadFile(dir, '@meta.json') || {},
        data: loadFile(dir, '@data.js') || {},
        isMarkdown,
    }

    if (domain === 'apps') {
        resource.entry = name;
        resource.url = join('/', name);
        resource.base = resource.url;
    }

    if (entry === 'apps/home') {
        resource.url = '/';
    }


    if (!isMarkdown) {
        return resource;
    }

    try {
        return {
            ...resource,
            content: readFileSync(fullPath, { encoding: 'utf8' }),
        }
    } catch (error) {
        console.error(error);
        return resource;
    }
}

module.exports = {
    createResource
}
