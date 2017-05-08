var express = require('express');

var app = express();

app.use(express.static('public'));
app.set('views', 'src/views');
app.set('view engine', 'jade');

app.get('/', function (req, res) {
    res.render('index', {
        list: ['1', '2', '3']
    });
});

app.get('/books', function (req, res) {
    res.send('Hello books');
});

var port = process.env.PORT || 5000;
app.listen(port, function (err) {
    console.log('running server on port ' + port);
});