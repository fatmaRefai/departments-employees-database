const Sequelize = require('sequelize');
const sequelize = require('./configurations/config');


const Department = sequelize.define('Department', {
    ID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    DepartmentName: {
        type: Sequelize.STRING,
        allowNull: false,
    }
});

module.exports = Department;