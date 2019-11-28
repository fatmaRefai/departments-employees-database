const Employee = require('../employee');
const router = require('express').Router();
var bodyParser = require('body-parser');

// create application/json parser
var jsonParser = bodyParser.json();

router.post('/add_employee',jsonParser, (req, res) => {
    Employee.create(
        { FirstName: req.body.FirstName,
          LastName: req.body.LastName,
          Salary:req.body.Salary,
          DepartmentID:req.body.DepartmentID
         }).then((result) => {
            return res.status(200).send(result);
        })
        .catch((err) => { return res.status(500).send(err); });
});

router.get('/get_employees',jsonParser, (req, res) => {
    Employee.findAll().then((result) => {
            return res.status(200).send(result);
        })
        .catch((err) => { return res.status(500).send(err); });
});

router.get('/get_employees/:department',jsonParser, (req, res) => {
    Employee.findAll({where:{ DepartmentID: req.params.department}})
    .then((result) => {

        if(result.length == 0){
            return res.status(404).send("No records exist");
        }
            return res.status(200).send(result);
        })
        .catch((err) => { return res.status(500).send(err); });
});

router.patch('/edit_employee/:id',jsonParser, (req, res) => {
    Employee.findByPk(parseInt(req.params.id))
    .then((result) => {
        if(result){
            for(let i in req.body){
                console.log(i);
                console.log(result[i]);
                console.log(req.body[i]);
                result[i] = req.body[i];
            }

            result.save().then((result) => {res.status(200).send(result)});
    
        }
        else return res.status(404).send("No records exist");
        })
        .catch((err) => { return res.status(500).send(err); });
});

router.delete('/delete_employee/:id',jsonParser, (req, res) => {
    Employee.findByPk(parseInt(req.params.id)).then((result) => {
        if(result){
            result.destroy().then((result) => {res.status(200).send(result)});
        }
        else
            return res.status(404).send("No records exist");
      
        })
        .catch((err) => { return res.status(500).send(err); });
});


module.exports = router;