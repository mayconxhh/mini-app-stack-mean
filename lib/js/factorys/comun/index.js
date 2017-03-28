// Factory Comun
export default ['$http', function($http){

	var comun = {}
	comun.tareas = []

	comun.tarea = {}

	// Methods remote

	// Method GET
	comun.getAll = function(){
		return $http({
			method:'GET',
			url:'/tareas'
		}).then(function(res){
			angular.copy(res.data, comun.tareas)
			return comun.tareas
		})
	}

	// Method POST
	comun.add = function(tarea){
		return $http({
			method:'POST',
			data: tarea,
			url:'/tarea'
		}).then(function(res){
			comun.tareas.push(res.data)
		})
	}

	// Method PUT
	comun.update = function(tarea){
		return $http({
			method:'PUT',
			data: tarea,
			url:'/tarea/'+tarea._id
		}).then(function(res){
			var indice = comun.tareas.indexOf(tarea)
			comun.tareas[indice] = res.data
		})
	}

	// Method DELETE
	comun.delete = function(tarea){
		return $http({
			method:'DELETE',
			data: tarea,
			url:'/tarea/'+tarea._id
		}).then(function(res){
			var indice = comun.tareas.indexOf(tarea)
			comun.tareas.splice(indice, 1)
		})
	}

	return comun;

}]