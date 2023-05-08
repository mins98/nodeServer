const exoress=require('express');
const conectarDB =require('./config/db');
var cors = require('cors')

const port= process.env.port||4000;


const app=exoress();
//app.use(cors()) // Use this after the variable declaration
//conectar
conectarDB();

app.use(exoress.json());
app.use('/api/productos',require("./routes/producto"));



app.listen(port,() =>{
    console.log("servidor")
})
