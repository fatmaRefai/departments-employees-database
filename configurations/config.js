const Sequelize = require('sequelize');
const sequelize = new Sequelize('student_database','root','secret',{dialect: 'mysql'});

module.exports = sequelize;