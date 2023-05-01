const {Router} = require('express');
const router = Router();
const _ = require('underscore');

const movies = require('../sample.json');

const fs = require('fs');

router.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });

router.get('/movies', (req, res) => {
    res.json(movies);
});

router.get('/movies/:id', (req, res) => {
    const {id} = req.params;
    const movie = movies.find(z => z.id == id);
    res.json(movie);
});

/*router.get('/movies/buscar', (req, res) => {  
    const contenido = fs.readFileSync('./sample.json');
    //const pelis = JSON.parse(contenido);
    const searchTerm = req.query.q;
    const movie = contenido.filter(dato => dato.title.includes(searchTerm));

    if (movie.length > 0) {
        res.send(movie);
      } else {
        res.status(404).send('No se encontro la pelicula');
      }
    res.json(movie);
});*/

router.post('/movies', (req, res) => {
    const { title, director, year, rating} = req.body;
    if (title && director && year && rating){
        const id = movies.length + 1;
        const newMovie = {...req.body, id};
        movies.push(newMovie);
        res.json(movies);
    }else{
        res.json({Error :'Error 404'});
    }
});

router.delete('/movies/:id', (req, res) => {
    const {id} = req.params;
    _.each(movies, (movie, i) => {
        if (movie.id == id){
            movies.splice(i, 1);
        }
    });
    res.send(movies);
});

router.put('/movies/:id',(req, res) => {
    const {id} = req.params;
    const { title, director, year, rating} = req.body;
    if (title && director && year && rating){
        _.each(movies, (movie, i) => {
            if (movie.id == id){
                movie.title = title;
                movie.director = director;
                movies.year = year;
                movies.rating = rating;
            }
        });
            res.json(movies);
        }else{
            res.json({Error :'Todos los campos son requeridos'});
        }
        
});

module.exports = router;