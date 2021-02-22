const express = require('express');
const proxy = require('express-http-proxy');
const { http, netlify } = require('../config');
const { resources } = require('../resources');
const { render } = require('./renderer');

const app = express();

function log(resource) {
    console.log('GET', resource.url);
    return resource;
}

app.use(express.static('public'));

app.use(netlify.endpoint, proxy(`localhost:${netlify.port}${netlify.endpoint}`, {
    proxyErrorHandler: (err, res, next) => next(err)
}));

resources
    .map(log)
    .forEach(resource => {
        const handler = (req, res, next) => {
            try {
                const html = render(resource);

                return res
                    .header('Content-Type', 'text/html')
                    .send(html);
            } catch (error) {
                next(error);
            }
        }

        app.get(resource.url, handler);

        if (resource.meta.html5Routing) {
            app.get(`${resource.url}/*`, handler);
        }
    });

app.use((err, req, res, next) => {
    console.error(err.stack);

    return res
        .status(500)
        .send('Ops! Something went wrong...');
});

app.listen(
    http.port,
    () => {
        console.log('LAMBDA (proxy)', `/.netlify/functions/<function-name>`);
        console.log(`\nServer live at http://localhost:${http.port}...`)
    }
);
