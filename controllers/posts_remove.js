const express = require('express');
const router = express.Router();
const { articulos } = require('../models/articuloTecnologico'); // Importa tu modelo de artículo

router.get('/:articuloId', async (req, res) => {
  try {
    const articulo = await articulos.findById(req.params.articuloId); // Obtén el artículo usando el ID proporcionado en la URL
    res.render('eliminar_articulo', { articulo: articulo }); // Pasa el artículo a la vista
  } catch (error) {
    console.log(error);
    res.status(500).send("Ocurrió un error al cargar el formulario de eliminación.");
  }
});

router.post('/:articuloId', async (req, res) => {
  try {
    // Obten el ID del artículo a eliminar
    const articuloId = req.params.articuloId;

    // Elimina el artículo de la base de datos
    await articulos.findByIdAndDelete(articuloId);

    res.redirect('/posts_listar'); // Redirige a la lista de artículos después de eliminar el artículo
  } catch (error) {
    console.log(error);
    res.status(500).send("Ocurrió un error al eliminar el artículo.");
  }
});

module.exports = router;
