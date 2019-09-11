/*const express = require('express');
const bodyParser = require('body-parser');

const routerCategorias = require('./routers/categorias');
const routerCosas = require('./routers/cosas');

const PORT = 3000;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use('/categorias', routerCategorias);
app.use('/cosas', routerCosas);

app.use(express.static('public'));

app.set('views', './views');
app.set('view engine', 'ejs');


app.listen(PORT, function(err) {
  if(err) throw err;
  console.log(`Servidor escuchando en puerto ${PORT}`)
});*/
