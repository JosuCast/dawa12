const mongoose  = require("mongoose");

const conectarDB = async () =>{
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/proyecto',{
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('Conectado a la BD correctamente');
    }catch (error){
        console.log(error);
        process.exit(1);

    }
}

module.exports = conectarDB;