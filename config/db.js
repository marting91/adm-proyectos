const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('adm_proyectos', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    define: {
        timestamps: false
    }
});

module.exports = sequelize;