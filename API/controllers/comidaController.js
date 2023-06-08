const Comida = require('../models/Comida');
const multer = require('multer');
const storage = require('../config/multer');


const uploader = multer({
    storage
}).single('imagen')




exports.getComidas = async (req, res) => {
    try{
        const comidas = await Comida.find();
        res.json(comidas);
    }catch(error){
        console.log(error);
        res.status(500).send('Hubo un error');
    }
};



exports.postComidas = async (req, res) => {
    try {
        uploader(req, res, function (err) {
            if (err) {
                console.error(err);
                return res.status(500).send('Error en la carga de archivos');
            }

            const comida = new Comida({
                nombre: req.body.nombre,
                categoria: req.body.categoria,
                fileName: req.file.originalname,
                fileUrl: `http://localhost:4000/uploads/${req.file.originalname}`
            });

            comida.save()
                .then(savedComida => {
                    res.send(savedComida);
                })
                .catch(error => {
                    console.error(error);
                    res.status(500).send('Hubo un error al guardar la comida');
                });
        });
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
};




exports.actualizarComida = async (req, res) => {

    try {

        const {_id, nombre, categoria } = new Comida(req.body);
        let comidas = await Comida.findById(req.params.id);

        if(!comidas){
            res.status(404).json({ msg: 'No existe el producto'});
        }

        nombre._id = _id;
        comidas.nombre = nombre;
        comidas.categoria = categoria;

        console.log(comidas)

        comidas = await Comida.findOneAndUpdate({ _id: req.params.id }, comidas, { new: true } );
        res.json(comidas);

        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

exports.verComida = async (req, res) => {

    try {

        let comidas = await Comida.findById(req.params.id);

        if(!comidas){
            res.status(404).json({ msg: 'No existe el producto'});
        }

        res.json(comidas);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

exports.eliminarComida = async (req, res) => {
    
    try {

        let comidas = await Comida.findById(req.params.id);
        

        if(!comidas){
            res.status(404).json({ msg: 'No existe el producto'});
        }

        comidas = await Comida.findByIdAndRemove(req.params.id);

        res.json({ msg: 'El producto: ' + comidas.nombre + ' se ha eliminado' });
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}