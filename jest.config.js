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
    // testEnvironment: 'jsdom',
    // testEnvironmentOptions: {
    //     resources: 'usable',
    //     testUrl: 'http://localhost',
    // },
    // snapshotSerializers: ['jest-serializer-vue'],
    // setupFilesAfterEnv: [
    //     '<rootDir>/frontend/Test/Jest/Setup/Translation.ts',
    //     '<rootDir>/frontend/Test/Jest/Setup/JestDomMatchers.ts',
    // ],
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
    moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
        prefix: '<rootDir>/',
    }),
    // snapshotResolver: '<rootDir>/frontend/Test/Jest/Setup/SnapshotResolver.js',
    // transformIgnorePatterns: [`<rootDir>/node_modules/(?!${esModules})`],
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
