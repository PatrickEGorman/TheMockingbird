const path = require('path')
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')
module.exports = {
    entry: {
        create_article: './public/javascripts/article/create_article.js',
        categories: './public/javascripts/article/categories.js',
        index: './public/javascripts/index.js'
    },
    output: {
        path: path.join(__dirname, 'dist/frontend'),
        publicPath: '/',
        filename: '[name].js'
    },
    target: 'web',

    module: {
        rules: [
            {
                // Transpiles ES6-8 into ES5
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    }
}