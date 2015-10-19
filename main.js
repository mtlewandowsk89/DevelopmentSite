var SiteApp = angular.module('SiteApp', ['ngRoute'])

SiteApp.config(function($routeProvider) {
	$routeProvider

	.when('/', {
		templateUrl : 'pages/home.html',
		controller  : 'mainController'
	})

	.when('/about', {
		templateUrl : 'pages/about.html',
		controller  : 'aboutController'
	})

	.when('/contact', {
		templateUrl : 'pages/contact.html',
		controller  : 'contactController'
	})
})

SiteApp.controller('mainController', function($scope) {
})

SiteApp.controller('aboutController', function($scope) {
})

SiteApp.controller('contactController', function($scope) {
})