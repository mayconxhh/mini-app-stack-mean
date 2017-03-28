var express = require('express')
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var url = require('url')

var app = express()
var config = require('./config')

mongoose.connect(config.mongodb.mlab)

require('./models/tareas/')

var routes = require('./routes/index');

// Definimos la carpeta de vistas
app.set('views', __dirname + '/views');

// SE ESTABLECE LA EXTENSION POR DEFECTO DEL MAIN INDEX
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// Configuración para response en json
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// // DIRECCION DE ARCHIVOS STATICOS
app.use(express.static(__dirname + '/public'));

app.use('/', routes);

// Redireccionar todo lo demás a index.
app.get('*', function(req, res){
	res.render('index');
})

var port = process.env.PORT || 5000

app.listen(port, function(err){
	if (err) {
		console.log('Ocurrió un error al inicia el servidor'),
		process.exit(1)
	}	
	console.log('Iniciando servidor en el puerto: '+port)
})