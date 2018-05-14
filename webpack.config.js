const path = require('path'),
    webpack = require('webpack');

const config = {
    entry: {
        app: path.resolve(__dirname, './src/app.tsx'),
        vendor: ['react', 'react-dom']
    },
    output: {
        filename: 'js/[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json']
    },
    module: {
        rules: [
            { test: /\.tsx?$/, loader: 'ts-loader', exclude: /node_modules/ },
            { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' }
        ]
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    }
}

module.exports = config;