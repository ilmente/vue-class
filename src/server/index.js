const { readFileSync } = require('fs');
const { join } = require('path');
const Marp = require('@marp-team/marp-core');
const express = require('express');
const mockInitialState = require('./mock/initial-state');
const spaTemplate = require('./templates/spa');
const docTemplate = require('./templates/doc');
const { http, routes, statics } = require('../config');

const marpit = new Marp.default();
const app = express();
const root = process.cwd();

app.get(routes.home, (req, res) => {
    try {
        const path = 'home';
        const title = 'Home - Vue Class';
        const output = spaTemplate({ title, path });

        res
            .header('Content-Type', 'text/html')
            .send(output);
    } catch (error) {
        next(error);
    }
});

app.get(routes.docs, (req, res, next) => {
    try {
        const file = req.params.entry;
        const filename = join(root, 'docs', `${file}.md`);
        const markdown = readFileSync(filename, { encoding: 'utf8' });
        const { html, css } = marpit.render(markdown);
        const output = docTemplate({ html, css });

        res
            .header('Content-Type', 'text/html')
            .send(output);
    } catch (error) {
        next(error);
    }
});

app.get(routes.code, (req, res, next) => {
    try {
        const entry = req.params.entry;
        const path = req.path;
        const title = `Code examples ${entry} - Vue Class`;
        const initialState = mockInitialState[path];
        const output = spaTemplate({ title, path, initialState });

        res
            .header('Content-Type', 'text/html')
            .send(output);
    } catch (error) {
        next(error);
    }
});

app.get(routes.exercise, (req, res, next) => {
    try {
        const entry = req.params.entry;
        const path = req.path;
        const title = `Exercise ${entry} - Vue Class`;
        const initialState = mockInitialState[path];
        const output = spaTemplate({ title, path, initialState });

        res
            .header('Content-Type', 'text/html')
            .send(output);
    } catch (error) {
        next(error);
    }
});

app.use((err, req, res, next) => {
    console.error(err.stack);

    res
        .status(500)
        .send('Ops! Something went wrong...');
});

app.use(statics.public.template, express.static(statics.public.map));
app.use(statics.docsAssets.template, express.static(statics.docsAssets.map));

app.listen(
    http.port,
    () => console.log(`\nServer live at http://localhost:${http.port}...`)
);
