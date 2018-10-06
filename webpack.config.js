const path = require('path'),
    webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    mode: 'production',
    entry: {
        app: [path.resolve(__dirname, './src/index.js')],
        vendor: ['react', 'react-dom', 'antd']
    },
    output: {
        filename: 'js/[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.js', '.json']
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: ['style-loader', 'css-loader'],
                include: [
                    path.resolve(__dirname, 'node_modules', 'antd', 'dist', 'antd.css'), 
                    path.resolve(__dirname, 'src', 'styles')
                ]
            },
            { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' }
        ]
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'src', 'index.html') })]
}

module.exports = config;