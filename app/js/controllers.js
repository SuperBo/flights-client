'use strict';

/* Controllers */

var flightControllers = angular.module('flightControllers', []);

flightControllers.controller('RootCtrl', ['$scope',
    function RootCtrl($scope) {
    }])

flightControllers.controller('SearchBoxCtrl', ['$scope', '$http',
    function SearchBoxCtrl($scope, $http) {
        $scope.departDate = "11/10/2013";
        $scope.doSearch = function() {
            alert($scope.departDate);
        };
    }]);

flightControllers.controller('FlightListCtrl', ['$scope', '$routeParams', '$http',
    function FlightListCtrl($scope, $routeParams, $http){
        
        $http.get('flights/flights.json').success(function(data) {
            $scope.flights = data;
        });
        $scope.orderProp = 'time';
        $scope.checks = {available: true, domestic: false};
        $scope.checkAvailable = function(item) {
            if ($scope.checks.available)
                return (item.available > 0);
            return true;
        };

        $scope.outVals = [0,10];
        $scope.outTime = [$scope.outVals[0]*24/100, $scope.outVals[1]*24/100];
    }]);

