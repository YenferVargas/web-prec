const express = require('express');
const router = express.Router();
const {articulos} = require('../models/articuloTecnologico');
// Ruta para cargar el formulario de edición
router.get('/:articuloId', async (req, res) => {
  try {
    const articuloId = req.params.articuloId;
    const articulo = await articulos.findById(articuloId);
    // Lógica para obtener el artículo con el artículoId 

    res.render('post_update', { articulo });
  } catch (error) {
    console.log(error);
    res.status(500).send("Ocurrió un error al cargar el formulario de edición.");
  }
});

// Ruta para procesar la edición del artículo
router.post('/:articuloId', async (req, res) => {
  try {
    const articuloId = req.params.articuloId;
    const { titulo, descripcion, categoria, fecha } = req.body;
    const articulo = await articulos.findById(articuloId);
    //, (err, articulo)=>{
    if(articulo){
      articulo.titulo=titulo;
      articulo.descripcion=descripcion;
      articulo.categoria=categoria;
      articulo.fecha=fecha;
      
      await articulo.save();
      res.redirect('/posts_listar');
    }
    //})
    // Lógica para editar el artículo con el artículoId 
  
    
  } catch (error) {
    console.log(error);
    res.status(500).send("Ocurrió un error al editar el artículo.");
  }
});

module.exports = router;
