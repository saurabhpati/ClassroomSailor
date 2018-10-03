const path = require('path'),
    webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    mode: 'production',
    entry: {
        app: [path.resolve(__dirname, './src/app.js'), 'webpack-hot-middleware/client'],
        vendor: ['react', 'react-dom', 'antd']
    },
    output: {
        filename: 'js/[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.js', '.jsx', '.json']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: ['style-loader', 'css-loader']
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
        new HtmlWebpackPlugin({ template: './index.html' })]
}

module.exports = config;