var express = require('express');
var handlebars = require('express-handlebars');
var app = express();

app.use(express.static('public'));
app.set('views', 'src/views');

app.engine('.hbs', handlebars({ extname: '.hbs' }));
app.set('view engine', '.hbs');

app.get('/', function (req, res) {
    res.render('index', {
        title: 'Hello from render',
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