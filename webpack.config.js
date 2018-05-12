const path = require('path');
const config = {
    entry: ['./src/app.tsx'],
    output: {
        filename: 'bundle.js',
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
    }
}

module.exports = config;