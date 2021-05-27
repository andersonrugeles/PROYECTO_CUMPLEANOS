const express = require('express');
const router = express.Router();
const cumpleaneroController = require('../../Controllers/CumpleaneroController');

/* Crear Cumpleañero*/

router.post('/create', async (req,res)=>{
    const consulta = await cumpleaneroController.createCumpleanero(req.body);
    res.json({consulta});
})
/* Listar Cumpleañero*/
router.post('/listar',async (req,res)=>{
    const consultar= await cumpleaneroController.ListCumpleanero(req.body);
    res.json(consultar);
        
})
/* Actualizar Cumpleañero*/
router.put('/update', cumpleaneroController.update);
/* Eliminar Cumpleañero*/
router.delete('/delete',cumpleaneroController.destroy);



module.exports = router;