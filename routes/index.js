const express = require('express');
const router = express.Router();

module.exports = function () {

    // Ruta para el home
    router.get('/', (req, res) => {
        res.send("Index");
    });
    router.use('/nosotros', (req, res) => {
        res.send('Nosotros');
    })
    return router;
}