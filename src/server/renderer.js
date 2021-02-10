const Marp = require('@marp-team/marp-core');
const spaTemplate = require('../templates/spa');
const docsTemplate = require('../templates/docs');
const { navigationSitemap, getCurrentNavigationItemByUrl } = require('../resources');
const { version } = require('../../package.json');
const build = Date.now();

const marpit = new Marp.default();

function render(resource) {
    const meta = resource.meta;
    const title = `${meta.title} - ${resource.domainLabel}`;
    const base = resource.base;

    const initialState = {
        ...resource.data,

        platform: {
            version,
            build,
        },

        navigation: {
            sitemap: navigationSitemap,
            current: getCurrentNavigationItemByUrl(resource.url),
        },
    }

    if (!resource.isMarkdown) {
        return spaTemplate({ title, base, initialState });
    }

    const { html, css } = marpit.render(resource.content);
    return docsTemplate({ html, css });
}

module.exports = {
    render
}
