(function (window) {
	'use strict';

	// Your starting point. Enjoy the ride!
	var todoApp=angular.module('todoApp',['ngRoute','todoApp.controller']);
	//配置路由
	todoApp.config(['$routeProvider',function($routeProvider){
		$routeProvider.
		when('/',{
			templateUrl:'todo.html',
			controller:'mainCtrl'
		}).
		when('/:status',{
			templateUrl:'todo.html',
			controller:'mainCtrl'
		});
	}])

})(window);
