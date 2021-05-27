 const pool = require('../database');

 module.exports = function () {
 async function createUser(data, callback){
    let query= "insert into usuarios set ?";
    await pool.query(query,[data],(error,result,fields)=>{
        if(error){
            return callback(error);
        }
        return callback(null,result);
    });
    return "Creado Exitosamente";
 }


 async function validaUser(data){
    const {email,password}=data;
    const validar = await pool.query("select * from usuarios where email=? and password=?",[email,password]);
    return validar;
}
    async function show(){
         let consulta = "select * from usuarios"
         const data = await pool.query(consulta)
         return data
     }
     async function create(data){
        const {email,password}=data;
        const agregar={email,password};
        const insert= await pool.query("insert into usuarios set ?",[agregar]);
        return "Creado Exitosamente";
     }

     async function createCumpleanero(data){
        const {fk_id_usuario,nombre,apellido,fecha_nacimiento}=data;
        const agregar={fk_id_usuario,nombre,apellido,fecha_nacimiento};
        const insert= await pool.query("insert into cumpleanos set ?",[agregar]);
        return "Creado Exitosamente";
     }
     async function showCumpleanero(data){
        const {fk_id_usuario}=data;
        const consultar={fk_id_usuario};
        const mostrar = await pool.query("select * from cumpleanos where id_usuario=?",[consultar])
        return mostrar
    }
     return {
        /* show,
         create,
         createCumpleanero,
         showCumpleanero,*/
         createUser,
         validaUser,
     }
    }