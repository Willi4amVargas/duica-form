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
    console.log("Coneccion a base completo")
})

app.get('/',(req,res)=>{
    const sqlQuery='SELECT * FROM `provinces`'
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