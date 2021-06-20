const express = require('express');
const router = express.Router();

const proyectosController = require('../controllers/proyectosController');


module.exports = function () {

    // Ruta para el home
    router.get('/', proyectosController.proyectosHome);
    router.use('/nosotros', (req, res) => {
        res.send('Nosotros');
    })
    return router
}