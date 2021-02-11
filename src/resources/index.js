const groupBy = require('lodash/groupBy');
const reduce = require('lodash/reduce');
const head = require('lodash/head');
const sortBy = require('lodash/sortBy');
const startCase = require('lodash/startCase');
const { crawl } = require('./crawler');

const resources = sortBy(crawl(), ['url']);

const entries = resources
    .filter(resource => !resource.isMarkdown)
    .reduce((entries, resource) => ({
        ...entries,
        [resource.entry]: resource.fullPath,
    }), {});

const navigationItems = resources
    .map(resource => ({
        title: resource.meta.title || startCase(resource.name),
        subtitle: resource.meta.subtitle || resource.domainLabel,
        domain: resource.domain,
        domainLabel: resource.domainLabel,
        url: resource.url,
        isExternal: resource.isMarkdown,
    }));

function getCurrentNavigationItemByUrl(url) {
    return navigationItems.find(item => item.url === url) || {};
}

const navigationSitemap = sortBy(reduce(
    groupBy(navigationItems, 'domain'), 
    (sitemap, items, domain) => {
        if (domain === 'apps') {
            return [...sitemap, ...items];
        }

        const { domainLabel } = head(items);

        return [
            ...sitemap,
            {
                title: domainLabel,
                subtitle: '',
                domain,
                domainLabel,
                url: '#',
                children: items,
            },
        ];
    }, 
    []
), ['domain', 'title']);

module.exports = {
    resources, 
    entries,
    navigationItems,
    navigationSitemap,
    getCurrentNavigationItemByUrl,
}
