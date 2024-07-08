const db = require('../config/database');

exports.addClient = (req, res) => {
    const {
        nameClient,
        addressClient,
        rifClient,
        emailClient,
        telClient,
        contaClient,
        countryClient,
        provinceClient,
        cityClient,
        areaSalesClient,
        sellerClient,
        groupClient,
        typeClient
    } = req.body;

    if (!nameClient || !addressClient || !rifClient || !emailClient || !telClient || !contaClient || !countryClient || !provinceClient || !cityClient || !sellerClient) {
        return res.status(400).json({ message: 'Algunos de los campos son obligatorios' });
    }

    const sqlQuery = 'INSERT INTO clients (description, address, client_id, email, phone, contact, country, province, city, area_sales, seller, client_group, client_type) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)';
    db.query(sqlQuery, [nameClient, addressClient, rifClient, emailClient, telClient, contaClient, countryClient, provinceClient, cityClient, areaSalesClient, sellerClient, groupClient, typeClient], (err, result) => {
        if (err) {
            console.error('Error en la base de datos:', err);
            res.status(500).json({ message: 'Error \nPosible problema: El usuario ya existe' });
            return;
        }
        res.status(201).json({ message: 'Cliente agregado con éxito' });
    });
};
