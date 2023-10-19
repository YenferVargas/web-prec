const express = require('express');
const router = express.Router();
const {articulos} = require('../models/articuloTecnologico');
// Ruta para mostrar los comentarios 



router.get('/:articuloId', async (req, res) => {
  const articuloId = req.params.articuloId;
  try {
    
    const articulo = await articulos.findById(articuloId);
    res.render("comment_listar", {
      comentarios: articulo.comentarios
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("Ocurrió un error al obtener los comentarios.");
  }
});

module.exports = router;
