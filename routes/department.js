const Department = require('../department');
const router = require('express').Router();
var bodyParser = require('body-parser');

// create application/json parser
var jsonParser = bodyParser.json();

router.post('/add_department',jsonParser, (req, res) => {
    Department.create(
        { DepartmentName: req.body.DepartmentName }).then((result) => {
            return res.status(200).send(result);
        })
        .catch((err) => { return res.status(500).send(err); });
});

module.exports = router;