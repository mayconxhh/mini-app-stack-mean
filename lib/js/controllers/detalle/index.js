// Controlador Detalle
export default ['$scope', '$location', 'comun', function($scope, $location, comun){
	"use strict"
	
	if (comun.tarea.hasOwnProperty('_id')) {
		$scope.tarea = comun.tarea
	} else {
		$location.url('/')
	}

	$scope.actualizar = function(){
		comun.update($scope.tarea)
		$location.url('/')
	}

	$scope.eliminar = function(){
		comun.delete($scope.tarea)
		$location.url('/')
	}
}]