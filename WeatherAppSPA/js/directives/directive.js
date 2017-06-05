//Custom Directive
(function() {
	angular
		.module('weatherForecastApp')
		.directive('weatherReport', function() {
			return {
				templateUrl: 'views/weatherReport.html',
				scope: {
					weatherDay: "=",// Two-way binding of object
					convertToDegreeCelsius: "&",  // Passing a function
					convertToStandard: "&",  // Passing a function
					dateFormat: "@",	//One-way binding
					symbol:"@"// One-way binding
				},
				replace : true,
				restrict: 'E'
			}
	});
})();