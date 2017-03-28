import comun from './comun';

// Factorys
export default function () {
	'use strict';

  var app = angular.module('myProyect')

  app.factory('comun', comun)
}