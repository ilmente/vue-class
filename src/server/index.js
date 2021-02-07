const Marp = require('@marp-team/marp-core');
const express = require('express');
const spaTemplate = require('./templates/spa');
const docsTemplate = require('./templates/docs');
const { http } = require('../config');
const { resources, navigationSitemap, getCurrentNavigationItemByUrl } = require('../resources');

const app = express();
const marpit = new Marp.default();

function log(resource) {
    console.log('GET', resource.url);
    return resource;
}

function getHtml(url, resource) {
    const meta = resource.meta;
    const title = `${meta.title} - ${resource.domainLabel}`;
    const base = resource.base;
    const initialState = {
        ...resource.data,
        navigation: {
            sitemap: navigationSitemap,
            current: getCurrentNavigationItemByUrl(url),
        }
    }

    if (!resource.isMarkdown) {
        return spaTemplate({ title, base, initialState });
    }

    const { html, css } = marpit.render(resource.content);
    return docsTemplate({ html, css });
}

resources
    .map(log)
    .map(resource => app.get(resource.url, (req, res, next) => {
        try {
            const html = getHtml(req.path, resource);

            res
                .header('Content-Type', 'text/html')
                .send(html);
        } catch (error) {
            next(error);
        }
    }));

app.use((err, req, res, next) => {
    console.error(err.stack);

    res
        .status(500)
        .send('Ops! Something went wrong...');
});

app.use(express.static('public'));
app.use('/docs/assets', express.static('docs/assets'));

app.listen(
    http.port,
    () => console.log(`\nServer live at http://localhost:${http.port}...`)
);
