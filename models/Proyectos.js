const { DataTypes } = require('sequelize');
const db = require('../config/db');
const slug = require('slug');
const shortid = require('shortid');

const Proyectos = db.define('proyectos', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING(100)
    },
    url: {
        type: DataTypes.STRING(100),
        unique: true
    }
}, {
    hooks: {
        beforeCreate(proyecto) {
            const url = slug(proyecto.nombre);

            proyecto.url = `${url}-${shortid.generate()}`;
        },
        beforeUpdate(proyecto) {
            const url = slug(proyecto.nombre);

            proyecto.url = `${url}-${shortid.generate()}`;
        }
    }
});

module.exports = Proyectos;