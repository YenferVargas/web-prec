

const express = require('express');
const router = express.Router();


router.get('/:articuloId', async (req, res) => {
  try {

    res.render('eliminar_articulo', {  });
  } catch (error) {
    console.log(error);
    res.status(500).send("Ocurrió un error al cargar el formulario de eliminación.");
  }
});


router.post('/:articuloId', async (req, res) => {
  try {

    res.redirect('/posts_listar'); 
  } catch (error) {
    console.log(error);
    res.status(500).send("Ocurrió un error al eliminar el artículo.");
  }
});

module.exports = router;
