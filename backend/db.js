const mysql = require('mysql')

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

module.exports=db