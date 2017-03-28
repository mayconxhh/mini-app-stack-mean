import angular from 'angular'
import controllers from './controllers'
import factorys from './factorys'
import routes from './routes'


// Declaration app
const myApp = angular.module('myProyect', [require('angular-route')])

// Config app
myApp.config(routes)


// Calling controllers and factorys
controllers()
factorys()