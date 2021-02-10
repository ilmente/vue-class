require('toml-require').install();

const express = require('express');
const proxy = require('express-http-proxy');
const { http } = require('../config');
const { resources } = require('../resources');
const { render } = require('./renderer');
const netlify = require('../../netlify.toml');

const app = express();

function log(resource) {
    console.log('GET', resource.url);
    return resource;
}

resources
    .map(log)
    .map(resource => app.get(resource.url, (req, res, next) => {
        try {
            const html = render(resource);

            res
                .header('Content-Type', 'text/html')
                .send(html);
        } catch (error) {
            next(error);
        }
    }));

app.use(express.static('public'));
app.use(proxy(`localhost:${http.lambdaPort}`));
console.log('LAMBDA (proxy)', `/${netlify.build.functions}/<function-name>`);

app.use((err, req, res, next) => {
    console.error(err.stack);

    res
        .status(500)
        .send('Ops! Something went wrong...');
});

app.listen(
    http.serverPort,
    () => console.log(`\nServer live at http://localhost:${http.serverPort}...`)
);
