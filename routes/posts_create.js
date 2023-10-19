const express = require('express');
const router = express.Router();

// Importa el modelo de Artículos Tecnológicos 
const { articulos } = require('../models/articuloTecnologico');

// Ruta para mostrar el formulario de creación de un nuevo post
router.get('/', (req, res) => {
  res.render('posts_create');
});


router.post('/', async (req, res) => {
  // Obtiene los datos del formulario
  const { titulo, descripcion, categoria, fecha, autor, mensaje, comentarioFecha } = req.body;

  try {
    
    const nuevoArticulo = new articulos({
      titulo,
      descripcion,
      categoria,
      fecha,
      comentarios: [{ autor, mensaje, fecha: comentarioFecha }],
    });

    // Guarda el nuevo artículo en la base de datos
    await nuevoArticulo.save();

    // Redirige a la página de listado de artículos
    res.redirect('/posts_listar');
  } catch (error) {
    console.log(error);
    res.render('error'); // Puedes personalizar la página de error
  }
});

module.exports = router;
