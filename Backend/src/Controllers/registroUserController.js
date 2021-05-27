const model = require('../Models/registroUserModel');


async function show(){
    const data = await usuarios().show();
    return data;
}
async function validacion(req) {
 const data = await model().validaUser(req);
 return data;
    
}
async function create(req, res, next) {
    const data = req.body;
    const create = await model().createUser(data, (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).json({
                succes: 0,
                message: "Database conection error"
            })
            //error 500 = errores ene el servidor
        }
        return res.status(200).json({
            succes: 1,
            data: result
        })

    })
    return create
}

async function createCumpleanero(req){
    const usuaCumpleanero = await usuarios().createCumpleanero(req);
    return usuaCumpleanero;
}
async function showCumpleanero(req){
    const mostrarCumpleanero = await usuarios().showCumpleanero(req);
    return mostrarCumpleanero;
}

module.exports = {
    show,
     createCumpleanero,
    showCumpleanero,
    validacion,
    create
}