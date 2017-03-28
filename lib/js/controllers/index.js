import Home from './home';
import Detalle from './detalle';

// Controladores
export default  function () {
  'use strict';

  var app = angular.module('myProyect')

  app.controller('Home', Home)
  app.controller('Detalle', Detalle)
}