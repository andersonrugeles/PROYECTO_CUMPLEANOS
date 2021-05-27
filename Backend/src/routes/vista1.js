const express= require('express');
const router= express.Router();

router.get('/v',(req,res)=>{
    res.render('links/vista1');
});

module.exports=router;