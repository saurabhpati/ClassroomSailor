const path = require('path'),
    express = require('express'),
    app = express(),
    port = process.env.port || 3000;

app.get('/', (request, response) => {
    response.sendFile(path.resolve(__dirname, 'index.html'));
})

app.use(express.static(path.resolve(__dirname, 'dist')));

app.listen(port, () => {
    console.log(`App is listening on ${port}`);
});