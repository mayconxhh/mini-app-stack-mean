export default ['$scope', '$location', 'comun', function($scope, $location, comun){
	"use strict"

	$scope.tarea = {}

	comun.getAll()

	$scope.tareas = comun.tareas

	$scope.prioridades = ['Baja', 'Normal', 'Alta']

	$scope.agregar = function(){
		comun.add({
			nombre: $scope.tarea.nombre,
			prioridad: parseInt($scope.tarea.prioridad)
		})

		$scope.tarea.prioridad = ''
		$scope.tarea.nombre = ''
	}

	$scope.masPrioridad = function(tarea){
		tarea.prioridad += 1
		comun.update(tarea)
	}

	$scope.menosPrioridad = function(tarea){
		tarea.prioridad -= 1
		comun.update(tarea)
	}

	$scope.eliminarTarea = function(tarea){
		comun.delete(tarea)
	}

	$scope.editarTarea = function(tarea){
		comun.tarea = tarea
		$location.url('/detalle')
	}
}]