const db = require('../config/database');

class Location {
    static getProvinces(callback) {
        const sqlQuery = 'SELECT * FROM `provinces`';
        db.query(sqlQuery, callback);
    }

    static getCountries(callback) {
        const sqlQuery = 'SELECT * FROM `country`';
        db.query(sqlQuery, callback);
    }

    static getCities(callback) {
        const sqlQuery = 'SELECT * FROM `citys`';
        db.query(sqlQuery, callback);
    }
}

module.exports = Location;
