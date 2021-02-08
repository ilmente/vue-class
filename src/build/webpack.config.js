const { join } = require('path');

const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const tsConfig = require('./tsConfig');
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
    },

    entry: entries,

    output: {
        publicPath: '/',
        path: join(root, 'public'),
        filename: '[name]/app.js',
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

    plugins: [
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name]/style.css'
        }),
    ]
});
