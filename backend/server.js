const express = require('express')
const mysql = require('mysql')
const cors= require('cors')

const app= express()
const port=3001
app.use(cors())


const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'duca_form'
})

db.connect((err)=>{
    if (err) {
        throw err
    }
    console.log("Conexion a la base de datos completo")
})
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

//Obtiene los datos de los usuarios administradores
app.get('/readUsers',(req,res)=>{
    const sqlQuery='SELECT * FROM `users`'
    db.query(sqlQuery,(err,result)=>{
        if (err) {
            throw err
        }
        res.json(result)
    })
})


app.listen(port,(req,res)=>{
    console.log("Servidor escuchando en http://localhost:"+port)
})