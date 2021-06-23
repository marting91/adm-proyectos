const { DataTypes } = require('sequelize');
const db = require('../config/db');

const Proyectos = db.define('proyeectos', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING
    },
    url: {
        type: DataTypes.STRING
    }
});

module.exports = Proyectos;