const { join } = require('path');

const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const tsConfig = require('./tsConfig');
const { Module } = require('./Module');
const { entries } = require('../resources');

const root = process.cwd();

module.exports = () => ({
    mode: 'development',
    devtool: 'source-map',

    stats: {
        colors: true,
        chunks: false,
        chunkModules: false,
        chunkOrigins: false,
        modules: false,
        entrypoints: false,
        excludeAssets: [
            (assetName) => /\.map$/.test(assetName),
        ],
    },

    entry: entries,

    output: {
        publicPath: '/',
        path: join(root, 'public'),
        filename: '[name].js',
    },

    resolve: {
        extensions: ['.vue', '.ts', '.js', '.css', '.sass', '.scss', '.json'],
        alias: {
            ...tsConfig.extractAliases(),
            vue: 'vue/dist/vue.js'
        },
    },

    module: {
        rules: [
            {
                test: /\.vue$/,
                exclude: /node_modules/,
                loader: 'vue-loader'
            },
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                loader: 'ts-loader',
                options: {
                    context: root,
                    configFile: tsConfig.getFilename(),
                    appendTsSuffixTo: [/\.vue$/],
                },
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.(sc|sa|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            implementation: require('sass'),
                            sassOptions: {
                                includePaths: [
                                    join(root, 'src/client/styles'),
                                ],
                            },
                        },
                    },
                ],
            },
        ]
    },

    optimization: {
        runtimeChunk: {
            name: 'runtime',
        },

        splitChunks: {
            cacheGroups: {
                default: false,
                commons: false,

                vendors: {
                    name: 'vendors',
                    chunks: 'initial',
                    enforce: true,
                    priority: -10,
                    test(module) {
                        const mod = new Module(module);
                        return mod.contains('node_modules');
                    },
                },
            },
        },
    },

    plugins: [
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
        new CopyPlugin({
            patterns: [
                { from: 'assets', to: 'assets' },
            ],
        }),
    ]
});
