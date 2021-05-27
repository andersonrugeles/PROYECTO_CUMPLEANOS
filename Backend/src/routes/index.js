const express= require('express');
const router= express.Router();

router.get('/l',(req,res)=>{
    res.render('index/inicio');
});



module.exports=router;