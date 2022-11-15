 import {pool} from '../db.js'
 
 export const getCarta = async (req, res) => {
   //throw new Error('Mi error')
   try {
      const [rows] = await pool.query('select * from carta')
      res.json(rows)
   }catch(error){
      return res.status(500).json({message:'OH OH ALGO VA MAL'})
   }
 }

 export const getCartas = async (req, res) => {
   //console.log(req.params.id)
   try {
      //throw new Error('Error inesperado')
      const[rows] = await pool.query('select * from carta where id = ?', [req.params.id])
      if (rows.length <=0){
         return res.status(404).json({message: 'No se encontró el plato'})
      }
      res.json(rows[0])
   }catch (error) {
      return res.status(500).json({message:'OH OH ALGO VA MAL'})
   }
   //console.log(rows)
   //res.send('Obteniendo carta')
 }

 export const  createCarta = async (req, res) => {
   const { platos, descripcion, precio, disponibilidad } = req.body
   try {
      const [rows] =  await pool.query('insert into carta(platos, descripcion, precio, disponibilidad) values (?, ?, ?, ?)', 
      [platos, descripcion, precio, disponibilidad])
      //console.log(req.body)
      res.send({
        id: rows.insertId,      
        platos, 
        descripcion,
        precio, 
        disponibilidad,
      })
   }catch (error) {
      return res.status(500).json({message:'OH OH ALGO VA MAL'})
   }
}
export const deletePlato = async (req, res) => {
   try {
      const [result] = await pool.query('delete from carta where id = ?', [req.params.id])
      if(result.affectedRows <= 0){
         return res.status(404).json({message: 'Plato no encontrado'})
      }
      res.sendStatus(204)  
   }catch (error) {
      return res.status(500).json({message:'OH OH ALGO VA MAL'})
   }
   //console.log(result)
   //res.send('plato eliminado')
}

 export const updateCarta = async( req, res) => {
   const {id} = req.params
   const {platos, descripcion, precio, disponibilidad} = req.body
   try {
      const [result] = await pool.query('UPDATE carta SET platos = IFNULL(?, platos), descripcion = IFNULL(?, descripcion), precio = IFNULL(?, precio), disponibilidad = IFNULL(?, disponibilidad) where id = ?',
      [platos, descripcion, precio, disponibilidad, id])
      console.log(result)
      if(result.affectedRows==0){
         return res.status(404).json({message: 'Plato no encontrado'})
      }
      const [rows] = await pool.query('select * from carta where id = ?', [id])
      res.json(rows[0])
      
   }catch (error) {
      return res.status(500).json({message:'OH OH ALGO VA MAL'})
   }
   //console.log(id, platos, descripcion, precio, disponibilidad)
 }
 
 /*
  LINEA PARA EL GET/put.....
 {
  "platos":"macarrones",
  "descripcion":"ajo, tomate frito natural",
  "precio": 6.75,
  "disponibilidad": 1
}
 */
 