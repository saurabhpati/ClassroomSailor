const path = require('path'),
    webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    mode: 'production',
    entry: {
        app: [path.resolve(__dirname, './src/index.tsx')],
        vendor: ['react', 'react-dom', 'antd', 'react-router-dom']
    },
    output: {
        filename: 'js/[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.ts', 'tsx', '.js', '.json', '.less', '.css']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader',
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
            { enforce: 'pre', test: /\.tsx?$/, loader: 'source-map-loader' }
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