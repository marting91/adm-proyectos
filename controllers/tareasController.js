const Proyectos = require('../models/Proyectos');
const Tareas = require('../models/Tareas');

exports.agregarTarea = async (req, res, next) => {

    // Proyecto actual
    const proyecto = await Proyectos.findOne({ where: { url: req.params.url } });

    // Leo tarea
    const { tarea } = req.body;

    const estado = 0; // Incompleto
    const proyectoId = proyecto.id;

    const resultado = await Tareas.create({ tarea, estado, proyectoId });

    if (!resultado) {
        return next();
    }

    // "Recargo" la página
    res.redirect(`/proyectos/${req.params.url}`);
}