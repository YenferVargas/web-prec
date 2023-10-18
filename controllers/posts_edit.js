const express = require('express');
const router = express.Router();

// Ruta para cargar el formulario de edición
router.get('/:articuloId', async (req, res) => {
  try {
    const articuloId = req.params.articuloId;
    // Lógica para obtener el artículo con el artículoId (debes implementarla)

    res.render('editar_articulo', { articulo }); // Asegúrate de pasar el artículo a la vista
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

    // Lógica para editar el artículo con el artículoId (debes implementarla)

    res.redirect('/posts_listar');
  } catch (error) {
    console.log(error);
    res.status(500).send("Ocurrió un error al editar el artículo.");
  }
});

module.exports = router;
