const express = require('express');
const routes = require('./routes');
const path = require('path'); // para leer el file system


// Crear una "aplicacion" de express
const app = express();

// Donde cargar los archivos estaticos
app.use(express.static('public'));

// Habilitar Pug
app.set('view engine', 'pug');

// Agregar la carpeta de las vistas
app.set('views', path.join(__dirname, './views'));

// Habilitar urlencoded (antes bodyParser)
app.use(express.urlencoded({ extended: true }));

app.use('/', routes());

app.listen(3000);