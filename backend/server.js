const express = require('express')
const cors= require('cors')
const db = require('./db')

const app= express()
const port=3001
app.use(cors())
app.use(express.json());


//Obtiene la data del Pais, Estado y ciudad
//Obtiene datos de los paises
app.get('/readProvince',(req,res)=>{
    const sqlQuery='SELECT * FROM `provinces`'
    db.query(sqlQuery,(err,result)=>{
        if (err) {
            throw err
        }
        res.json(result)
    })
})

//Obtiene datos de los estados
app.get('/readCountry',(req,res)=>{
    const sqlQuery='SELECT * FROM `country`'
    db.query(sqlQuery,(err,result)=>{
        if (err) {
            throw err
        }
        res.json(result)
    })
})

//Obtiene datos de las Ciudades
app.get('/readCity',(req,res)=>{
    const sqlQuery='SELECT * FROM `citys`'
    db.query(sqlQuery,(err,result)=>{
        if (err) {
            throw err
        }
        res.json(result)
    })
})

//Buscar el usuario administrador para ponerlo en el formulario
app.get('/readUser',(req,res)=>{
    const {code}=req.body
    const sqlQuery='SELECT `description` FROM `users` WHERE code=?'
    db.query(sqlQuery,[code],(err,result)=>{
        if (err) {
            console.log("Error en la base de datos",err)
            return;
        }
        if (result.length===0) {
            res.status(404).json({message:'Usuario no encontrado'})

        }else{
            res.json(result[0])
            console.log(result)
        }
    })
})

//Busca en la base de datos el usuario administrador y comprueba que exista
app.post('/login', (req, res) => {
    const { code, password } = req.body;
    if (!code || !password) {
        res.status(400).json({ message: 'Usuario y Contraseña son requeridos' });
        return;
    }
    const sqlQuery = 'SELECT * FROM `users` WHERE code = ?';
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
});

//Añade un cliente a la base de datos
app.post('/addClient', (req, res) => {
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

    if (!nameClient || !addressClient || !rifClient || !emailClient || !telClient || !contaClient || !countryClient || !provinceClient || !cityClient || !sellerClient ) {
        return res.status(400).json({ message: 'Algunos de los campos son obligatorios' });
    }

    const sqlQuery = 'INSERT INTO `clients`( `description`, `address`, `client_id`, `email`, `phone`, `contact`, `country`, `province`, `city`, `area_sales`, `seller`, `client_group`, `client_type`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)';
    db.query(sqlQuery, [nameClient, addressClient, rifClient, emailClient, telClient, contaClient, countryClient, provinceClient, cityClient, areaSalesClient, sellerClient, groupClient, typeClient], (err, result) => {
        if (err) {
            console.error('Error en la base de datos:', err);
            res.status(500).json({ message: 'Error \nPosible problema: El usuario ya existe' });
            return;
        }
        res.status(201).json({ message: 'Cliente agregado con éxito' });
    });
});

app.listen(port,(req,res)=>{
    console.log("Servidor escuchando en http://localhost:"+port)
})