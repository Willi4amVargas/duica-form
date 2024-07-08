const db = require('../config/database');

exports.getProvinces = (req, res) => {
    const sqlQuery = 'SELECT * FROM provinces';
    db.query(sqlQuery, (err, result) => {
        if (err) throw err;
        res.json(result);
    });
};

exports.getCountries = (req, res) => {
    const sqlQuery = 'SELECT * FROM country';
    db.query(sqlQuery, (err, result) => {
        if (err) throw err;
        res.json(result);
    });
};

exports.getCities = (req, res) => {
    const sqlQuery = 'SELECT * FROM citys';
    db.query(sqlQuery, (err, result) => {
        if (err) throw err;
        res.json(result);
    });
};
