const express= require('express');
const router= express.Router();

router.get('/factorial',(req,res)=>{
    res.render('links/factorial');
});

router.post('/factorial',(req,res)=>{
    const {n1}=req.body;
    const numero1=n1;
    var contador=1;
    for (let index = 1; index <= numero1; index++) {
        contador = contador*index;
        
    }
    const total = contador;
    
    console.log(total);
});


module.exports=router;