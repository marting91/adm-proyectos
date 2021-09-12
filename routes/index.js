const express = require('express');
const router = express.Router();
const { body } = require('express-validator');

const proyectosController = require('../controllers/proyectosController');


module.exports = function () {

    // Ruta para el home
    router.get('/', proyectosController.proyectosHome);
    router.get('/nuevo-proyecto', proyectosController.formularioProyecto);
    router.post('/nuevo-proyecto',
        body('nombre').not().isEmpty().trim().escape(),
        proyectosController.nuevoProyecto);

    // Listar proyecto
    router.get('/proyectos/:url', proyectosController.proyectoPorUrl);

    // Actualizar el Proyecto
    router.get('/proyecto/editar/:id', proyectosController.formularioEditar);

    router.post('/nuevo-proyecto/:id',
        body('nombre').not().isEmpty().trim().escape(),
        proyectosController.actualizarProyecto);

    return router
}