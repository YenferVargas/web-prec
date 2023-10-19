var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose'); 
const app = express();

// Configura la conexión a la base de datos
const uri = 'mongodb://127.0.0.1:27017/articulos_tecnologicos';
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Base de datos conectada'))
  .catch(e => console.log(e));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var dashRouter = require('./routes/dash');
const postsListarRouter = require('./routes/posts_listar');
const postsCreateRouter = require('./routes/posts_create');
const commentListarRouter = require('./routes/comment_listar');

app.use('/posts_listar', postsListarRouter);
app.use('/posts_create', postsCreateRouter);
app.use('/comment_listar', commentListarRouter);

app.get('/comment_listar/:articuloId', async (req, res) => {
  try {
    const articuloId = req.params.articuloId;

    //  modelo de Comentario 
    const comentarios = await Comentario.find({ articulo: articuloId });

    res.render("comment_listar", {
      comentarios: comentarios
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("Ocurrió un error al obtener los comentarios.");
  }
});

//eliminar y editar
const postsEditRouter = require('./controllers/posts_update');
const postsRemoveRouter = require('./controllers/posts_remove');

app.use('/posts_update', postsEditRouter);
app.use('/posts_remove', postsRemoveRouter);
///---------fin

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/dashboard', dashRouter);

app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

app.get('/posts_create', (req, res) => {
  res.render('crear_articulo');
});

app.post('/posts_create', async (req, res) => {
  try {
    const { titulo, descripcion, categoria, fecha } = req.body;

    // Lógica para crear y guardar un nuevo artículo en la base de datos usando Mongoose

    res.redirect('/posts_listar'); 
  } catch (error) {
    console.log(error);
  }
});

module.exports = app;
