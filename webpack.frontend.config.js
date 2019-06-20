const path = require('path')
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')
module.exports = {
    entry: {
        create_article: './public/javascripts/create_article.js'
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