const express= require('express');
const router= express.Router();

router.get('/v2',(req,res)=>{
    res.render('links/vista2');
});

module.exports=router;