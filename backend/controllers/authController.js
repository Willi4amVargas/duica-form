const db = require('../config/database');

exports.readUser = (req, res) => {
    const { code } = req.body;
    const sqlQuery = 'SELECT description FROM users WHERE code=?';
    db.query(sqlQuery, [code], (err, result) => {
        if (err) {
            console.log("Error en la base de datos", err);
            return;
        }
        if (result.length === 0) {
            res.status(404).json({ message: 'Usuario no encontrado' });
        } else {
            res.json(result[0]);
        }
    });
};

exports.login = (req, res) => {
    const { code, password } = req.body;
    if (!code || !password) {
        res.status(400).json({ message: 'Usuario y Contraseña son requeridos' });
        return;
    }
    const sqlQuery = 'SELECT * FROM users WHERE code = ?';
    db.query(sqlQuery, [code], (err, result) => {
        if (err) {
            console.error('Error en la base de datos:', err);
            res.status(500).json({ message: 'Error en la base de datos' });
            return;
        }
        if (result.length === 0) {
            res.status(401).json({ message: 'Usuario no encontrado' });
        } else {
            const user = result[0];
            if (user.user_password === password) {
                res.json({ message: 'Sesion iniciada correctamente', user });
            } else {
                res.status(401).json({ message: 'Contraseña incorrecta' });
            }
        }
    });
};

