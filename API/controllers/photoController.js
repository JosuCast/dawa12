


exports.verPhoto = async (req, res) => {

    try{
        let photo = `../uploads/${req.params.id}`;
        res.sendFile(photo);
    }catch(error){
        res.send("Error al mostrar foto");
    }
};