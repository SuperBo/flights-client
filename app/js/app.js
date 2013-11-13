'use strict';

// Declare app level module which depends on filters, and services

var flightApp = angular.module('flightApp', [
	'ngRoute',
	'wijmo',
    'flightControllers',
    'flightFilters'
]);

flightApp.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
			when('/', {
				templateUrl: 'partials/search.html',
				controller: 'SearchBoxCtrl'
			}).
			when('/flights', {
				templateUrl: 'partials/list.html',
				controller: 'FlightListCtrl'
			}).
			otherwise({
				redirectTo: '/'
			});
	}]);
