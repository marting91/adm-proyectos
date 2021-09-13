const { DataTypes, INTEGER } = require('sequelize');
const db = require('../config/db');
const Proyectos = require('./Proyectos');

const Tareas = db.define('tareas', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    tarea: DataTypes.STRING(100),
    estado: DataTypes.INTEGER(1)
});

Tareas.belongsTo(Proyectos);
// Igual que Proyectos.hasMany(Tareas);

module.exports = Tareas;