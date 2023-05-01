const express = require('express');
const app = express();
const morgan = require('morgan');

//configuraciones
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

//middleware
app.use(morgan('dev'));
app.use((req, res, next) => {
    if (req.originalUrl === '/') {
      res.redirect('/movies');
    } else {
      next();
    }
  });
  
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//rutas
app.use(require('./rutas/movies'));

//iniciando el server
app.listen(app.get('port'), () => { 
    console.log(`server on port ${app.get('port')}`);
});