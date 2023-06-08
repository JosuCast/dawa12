const express = require('express')
const config = require('./config/global')
const db = require('./config/db')
const cors = require('cors');
const path = require('path')
const app = express();

db();

app.use(cors());
app.use(express.json());
app.use('/api/comidas', require('./routes/comida'));
app.use('/api/photos', require('./routes/photo'));

app.use('/uploads', express.static(path.resolve('uploads')));


app.listen(config.port, ()=>{
    console.log('La API esta corriendo en el puerto 4000')
})
