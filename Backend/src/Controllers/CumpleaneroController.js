const model = require('../Models/Cumpleanero');

async function createCumpleanero(req) {
    const data = await model().createCumpleanero(req);
    return data;
       
}

async function ListCumpleanero(req) {
    const data = await model().getCumpleaneroId(req);
    return data;
}
async function update(req, res, next) {    
    const data = req.body;
        const update = await model().update(data, (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).json({
                succes: 0,
                message: "Database conection error"
            })            
        }
        return res.status(200).json({
            succes: 1,
            data: result
        })

    })
    return update
}

async function destroy(req, res , next) {
    const data = req.body;
    const borrar = await model().destroy(data, (err, result) => {
    if (err) {
        console.log(err);
        return res.status(500).json({
            succes: 0,
            message: "Database conection error"
        })            
    }
    return res.status(200).json({
        succes: 1,
        data: result
    })

})
return borrar


}


module.exports = {
    
    createCumpleanero,
    ListCumpleanero,
    update,
    destroy,
    
}