const mongoose = require('mongoose');

const ComidaSchema = mongoose.Schema({

    nombre: {
        type: String,
        require: true
    },
    categoria: {
        type: String,
        require: true
    },
    fileName:{
        type: String,
        require: true
    },
    fileUrl:{
        type: String,
        require: true
    }


})


module.exports = mongoose.model('Comida',ComidaSchema)