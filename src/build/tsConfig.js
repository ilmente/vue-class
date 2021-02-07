const { join } = require('path');
const root = process.cwd();

function getFilename() {
    return join(root, 'tsconfig.json');
}

function load() {
    return require(getFilename());
}

function extractAliases() {
    const tsConfig = load();
    const { baseUrl, paths } = tsConfig.compilerOptions;

    return Object.keys(paths).reduce((aliases, pathName) => {
        if (pathName === '*' || paths[pathName].length === 0) {
            return aliases;
        }

        const alias = pathName.replace(/(\/\*?)$/, '');
        const aliasPath = paths[pathName][0].replace(/(\/\*?)$/, '');

        return {
            ...aliases,
            [alias]: join(root, baseUrl, aliasPath),
        };
    }, {});
}

module.exports = {
    getFilename,
    load,
    extractAliases,
};
