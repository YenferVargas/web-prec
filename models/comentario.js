const mongoose = require('mongoose');

const comentarioSchema = new mongoose.Schema({
  autor: String,
  mensaje: String,
  fecha: { type: Date, default: Date.now },
});

const Comentario = mongoose.model('Comentario', comentarioSchema);

module.exports = Comentario;
