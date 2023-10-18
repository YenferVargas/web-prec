const mongoose = require('mongoose');
const Schema = mongoose.Schema

const articuloSchema = new Schema({
  titulo: String,
  descripcion: String,
  categoria: String,
  fecha: Date,
  comentarios: [
    {
      autor: String,
      mensaje: String,
      fecha: Date,
    },
  ],
 
  
});
// crear moodelo
const ArticulosTecnologicos = mongoose.model('articulos', articuloSchema);
module.exports = { articulos: ArticulosTecnologicos};