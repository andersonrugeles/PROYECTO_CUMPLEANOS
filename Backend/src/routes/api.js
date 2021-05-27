const express= require('express');
const router= express.Router();
const pool =require('../database');

router.get('/listar',async(req,res)=>{
   const consulta=await pool.query("select * from cumpleanos");
   res.send(consulta);
});


router.get('/add_user',async(req,res)=>{
   const consulta_Cumpleanos= await pool.query("select * from cumpleanos where fk_id_usuario=?");
   res.send(consulta_Cumpleanos);
});

router.post('/validacion',async(req,res)=>{
    const {email,password}=req.body;
    const consulta=await pool.query("select * from usuarios where email=? and password=?",[email,password]);
    res.json(consulta);
});

module.exports=router;