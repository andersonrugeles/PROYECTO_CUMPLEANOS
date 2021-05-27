
const pool = require('../database');


module.exports = function () {
async function createCumpleanero(data){
    const {fk_id_usuario,nombre,apellido,fecha_nacimiento}=data;
    const agregar={fk_id_usuario,nombre,apellido,fecha_nacimiento};
    const insert= await pool.query("insert into cumpleanos set ?",[agregar]);
    return "Creado Exitosamente";
 }
 async function getCumpleaneroId(data) {
    const {fk_id_usuario}=data;
    const agregar={fk_id_usuario};
    const mostrar = await pool.query("select * from cumpleanos  where fk_id_usuario=?",fk_id_usuario)
    //console.log(mostrar);

    return mostrar
}

async function update(data, callback) {
    let query = 'UPDATE cumpleanos SET nombre=?, apellido=?, fecha_nacimiento=? WHERE id_cumpleanos=?';
    await pool.query(query,
        [
            data.nombre,
            data.apellido,
            data.fecha_nacimiento,
            data.id_cumpleanos,
            
        ],
        (error, result, fields) => {
            if (error) {
                return callback(error);
            }
            return callback(null, result[0]);
        }
    );
}

async function destroy(data,callback) {
    let query = 'delete from cumpleanos where id_cumpleanos = ?';
    await pool.query(query,
        [
            data.id_cumpleanos,
        ],
        (error, result, fields) => {
            if (error) {
                return callback(error);
            }
            return callback(null, result[0]);
        }
    );
}


 return {
  createCumpleanero,
  getCumpleaneroId,
  update,
  destroy
}
}