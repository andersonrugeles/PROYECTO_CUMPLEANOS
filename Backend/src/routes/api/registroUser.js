const express= require('express');
const { validacion } = require('../../Controllers/registroUserController');
const router= express.Router();
const usuariosController = require('../../Controllers/registroUserController');
const userController=require('../../Controllers/registroUserController');

router.get('/consultar', async (req,res)=>{
    const usuarios = await usuariosController.show();
    res.json({usuarios});
})

router.post('/create', userController.create);

router.post('/validar', async (req,res)=>{
    const valida=await userController.validacion(req.body);
    res.json(valida);
})

router.post('/add_user', async (req,res)=>{
    const usuarios = await usuariosController.create(req.body);
    console.log('registro exitoso');
    res.json({usuarios});
})

router.post('/add_cumpleanero', async (req,res)=>{
    const usuarios = await usuariosController.createCumpleanero(req.body);
})
router.get('/consultar_cumpleanero', async (req,res)=>{
    const consulta = await usuariosController.showCumpleanero(req.body);
    res.json({consulta});
})
/*
router.get('/listar',async(req,res)=>{
   const consulta=await pool.query("select * from usuarios");
   res.send(consulta);
});

router.post('/add_user',async(req,res)=>{
    const {email,password}=req.body;
    const agregar={email,password};
    const insert= await pool.query("insert into usuarios set ?",[agregar]);
});

router.post('/validacion',async(req,res)=>{
    const {email,password}=req.body;
    const respuesta=null;
    const consulta=await pool.query("select * from usuarios where email=? and password=?",[email,password]);
    if(consulta=!null){
        respuesta=true;
        console.log(respuesta);
    }else{
        console.log(respuesta);
    }
  });
  
*/
module.exports=router;