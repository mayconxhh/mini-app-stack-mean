var mongoose = require('mongoose')

var TareasSchema = new mongoose.Schema({
	nombre: String,
	prioridad: Number
})

var Tareas = mongoose.model('Tareas', TareasSchema)

module.exports = Tareas;