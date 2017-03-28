import angular from 'angular'
import 'angular-route'

// Routes
export default ['$routeProvider', '$locationProvider', ($routeProvider, $locationProvider)=>{
	$routeProvider
		.when('/', {
			templateUrl:'partials/home',
			controller:'Home'
		})
		.when('/detalle', {
			templateUrl:'partials/detalle',
			controller: 'Detalle'
		})
		.otherwise({
			redirectTo: '/404',
			templateUrl: 'partials/404'
		})
	$locationProvider.html5Mode(true)
}]