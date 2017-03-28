var express = require('express')
var router = express.Router()

// RENDER DEL INDEX
router.get('/', function(req, res){
	res.render('index')
})

// Esto para acceder a los archivos html
router.get('/partials/:name', function (req, res) {
	var name = req.params.name;
	res.render('partials/' + name);
});

var mongoose = require('mongoose')
var Tareas = mongoose.model('Tareas')

// GET - METODO PARA LISTAR TAREAS
router.get('/tareas', function(req, res, next){
	Tareas.find(function(err, tareas){
		if (err) {
			return next()
		}
		res.json(tareas)
	})
})

// POST - METODO PARA AGREGAR TAREAS
router.post('/tarea', function(req, res, next){
	var tarea = new Tareas(req.body)
	tarea.save(function(err, tarea){
		if (err) {
			return next()
		}
		res.json(tarea)
	})
})

// PUT - ACTUALIZAR TAREAS 
router.put('/tarea/:id', function(req, res, next){
	Tareas.findById(req.params.id, function(err, tarea){
		tarea.nombre = req.body.nombre
		tarea.prioridad = req.body.prioridad

		tarea.save(function(err, tarea){
			if (err) {
				res.send(err)
			}
			res.json(tarea)
		})
	})
})

// DELETE - ELIMINAR TAREAS
router.delete('/tarea/:id', function(req, res, next){
	Tareas.findByIdAndRemove(req.params.id, function(err){
		if (err) {
			res.send(err)
		}
		res.json({message:'La tarea ha sido eliminada.'})
	})
})

module.exports = router