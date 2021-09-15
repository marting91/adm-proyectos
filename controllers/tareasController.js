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

exports.cambiarEstadoTarea = async (req, res, next) => {
    const { id } = req.params;
    const tarea = await Tareas.findOne({ where: { id } });

    tarea.estado = Number(!tarea.estado);

    const resultado = await tarea.save();

    if (!resultado) return next();

    res.status(200).send({ estado: tarea.estado });
}

exports.eliminarEstadoTarea = async (req, res, next) => {
    const { id } = req.params;

    // Elimino tarea
    const resultado = await Tareas.destroy({ where: { id } });

    console.log("Resultado ", resultado);
    if (!resultado) {
        return res.status(404).send({ msg: "Error" });
    }
    console.log("Despues del IF");

    res.status(200).send("Tarea borrada");
}