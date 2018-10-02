const path = require('path'),
    express = require('express'),
    webpack = require('webpack'),
    webpackConfig = require('./webpack.config'),
    app = express(),
    port = process.env.port || 3000;

app.use(express.static(path.resolve(__dirname, 'dist')));
let compiler = webpack(webpackConfig);
app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true, publicPath: webpackConfig.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.listen(port, () => {
    console.log(`App is listening on ${port}`);
});

app.get('/', (request, response) => {
    response.sendFile(path.resolve(__dirname, 'dist',   'index.html'));
});