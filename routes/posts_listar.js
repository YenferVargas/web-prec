const express = require('express');
const router = express.Router();

const {articulos} = require('../models/articuloTecnologico')


router.get('/', async (req, res) =>{
  try{
    const articulosArray = await  articulos.find()
    
    console.log(articulosArray);

    res.render("posts_listar",{
      arrayArticulos: articulosArray
    })


  }catch (error){
    console.log(error)
  }

});


module.exports = router;
