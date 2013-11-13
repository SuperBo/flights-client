'use strict';

/* Filters */

angular.module('flightFilters', [])
	.filter('available', function() {
		return function(input) {
			return (input.available < input.remain);
		}
	})
	.filter('percent2time', function() {
		return function(input) {
			var time = input * 24 / 100;
			var hour = Math.floor(time);
			var minute = time - hour;
			if (minute < 0.25)
				minute = 0;
			else if (minute < 0.75)
				minute = 30;
			else 
				minute = 59;
			return hour + ": " + minute;
		}
	});