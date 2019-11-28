const express = require('express');
const sequelize = require('./configurations/config');
const Employee = require('./employee');
const Department = require('./department');
const departments_router = require('./routes/department');
const employees_router = require('./routes/employee');
const app = express();

app.use('/departments',departments_router);
app.use('/employees',employees_router);

sequelize.authenticate().
then(()=>{console.log('connection has been established successfully');})
.catch((err)=>{console.log(err);});




Department.hasMany(Employee, {foreignKey: {allowNull: false}, onDelete: 'CASCADE'});

sequelize.sync().then((result) => {
    console.log(result);
}).catch((err) =>{console.log(err)});








app.listen(3000, ()=>{console.log('listening to port 3000')});