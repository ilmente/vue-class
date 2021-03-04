const { pathsToModuleNameMapper } = require('ts-jest/utils');
const { compilerOptions } = require('./tsconfig');

module.exports = {
    verbose: true,
    preset: 'ts-jest',
    roots: [
        '<rootDir>/src/client/apps/code/05/',
    ],
    transform: {
        '^.+\\.js$': 'babel-jest',
        '^.+\\.tsx?$': 'ts-jest',
        '.*\\.(vue)$': 'vue-jest',
    },
    moduleFileExtensions: ['js', 'ts', 'vue'],
    testRegex: '(/__tests__/.*|(\\.|/)test)\\.(jsx?|tsx?)$',
    moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
        prefix: '<rootDir>/',
    }),
    globals: {
        'vue-jest': {
            babelConfig: true,
            tsConfig: true,
        },
        'ts-jest': {
            babelConfig: true,
        },
    },
};
