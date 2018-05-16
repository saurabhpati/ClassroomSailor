const path = require('path'),
    webpack = require('webpack');

const config = {
    entry: {
        app: [path.resolve(__dirname, './src/app.jsx'), 'webpack-hot-middleware/client'],
        vendor: ['react', 'react-dom']
    },
    output: {
        filename: 'js/[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'jsx-loader',
                exclude: /node_modules/
            },
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            babelrc: false,
                            plugins: ['react-hot-loader/babel'],
                        },
                    },
                    'awesome-typescript-loader',
                    'jsx-loader'
                ],
                exclude: /node_modules/
            },
            { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' }
        ]
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    plugins: [new webpack.HotModuleReplacementPlugin(), new webpack.NoEmitOnErrorsPlugin()]
}

module.exports = config;