const { existsSync, readFileSync } = require('fs');
const { join, basename, dirname } = require('path');
const { labels } = require('../config');

const root = process.cwd();
const isAppDomain = (domain) => domain === 'apps';
const isHome = (entry) => entry === 'home';

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
    // fs
    const fullPath = join(root, path);
    const directory = dirname(fullPath);
    const isMarkdown = /\.md?/.test(fullPath);

    // files
    const meta = loadFile(directory, '@meta.json');
    const data = loadFile(directory, '@data.js');

    // url
    const name = basename(clean(path));
    const domain = basename(dirname(clean(path)));
    const entry = isAppDomain(domain) ? name : `${domain}/${name}`;
    const base = `/${entry}`;
    const url = isHome(entry) ? '/' : `/${entry}`;
    
    const resource = {
        path,
        fullPath,
        name,
        domain,
        domainLabel: labels[domain],
        entry,
        base,
        url,
        meta,
        data,
        isMarkdown,
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
