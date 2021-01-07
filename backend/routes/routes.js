const express = require('express');
const router = express.Router();

const mysqlConnection = require('../db/database');


router.get('/usuarios', (req, res) => {
    mysqlConnection.query('SELECT * FROM usuario', (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});



module.exports = router;
