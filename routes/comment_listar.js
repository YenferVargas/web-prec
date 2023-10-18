const express = require('express');
const router = express.Router();
const Comentario = require('../models/comentario'); 
const articulos = require('../models/articuloTecnologico'); 
// Ruta para mostrar los comentarios 



router.get('/', async (req, res) => {
  try {
    
    const todos_articulos = await articulos.find({});
    console.log(todos_articulos)
    const comentarios = todos_articulos[0].comentarios;

    console.log(comentarios);
    res.render("comment_listar", {
      comentarios: comentarios
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("Ocurrió un error al obtener los comentarios.");
  }
});

module.exports = router;
