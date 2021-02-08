const { outputFileSync } = require('fs-extra');
const { join } = require('path');
const { resources } = require('../resources');
const { render } = require('./renderer');

const root = process.cwd();
const getFilename = ({ url }) => join(root, 'public', url, 'index.html');

function log(resource) {
    const filename = getFilename(resource);
    console.log('writing', filename);
    return resource;
}

resources
    .map(log)
    .map(resource => {
        try {
            const html = render(resource);
            const filename = getFilename(resource);
            outputFileSync(filename, html, { encoding: 'utf8' });
        } catch (error) {
            console.error('fail', error.message);
        }
    });
