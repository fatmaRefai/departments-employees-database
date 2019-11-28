const Sequelize = require('sequelize');
const sequelize = require('./configurations/config');


const Employee = sequelize.define('Employee', {
    ID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    FirstName: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    LastName: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    Salary: {
        type: Sequelize.FLOAT,
        allowNull: false
    },


});


module.exports = Employee;