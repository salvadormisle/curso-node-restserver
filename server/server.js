require('./config/config.js');
const express = require('express');
const app = express();
var bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/', function(req, res) {
    res.json('Hello World');
});

app.get('/usuario', function(req, res) {
    res.json('getUsuario');
});

app.post('/', function(req, res) {
    res.json('postUsuario');
});
app.post('/usuario', function(req, res) {
    let body = req.body;

    if (body.nombre === undefined) {
        res.status(400).json({
            ok: false,
            mensaje: 'El nombre es necesario'
        });
    } else {
        res.json({
            persona: body

        });
    }
});

app.put('/', function(req, res) {
    res.json('putUsuario');
});
app.put('/usuario/:id', function(req, res) {
    let id = req.params.id;
    res.json({
        id
    });
});

app.delete('/', function(req, res) {
    res.json('deleteUsuario');
});
app.delete('/usuario', function(req, res) {
    res.json('deleteUsuario');
});

app.listen(process.env.PORT, () => {
    console.log(`Escuchando puerto: ${process.env.PORT}`);
});