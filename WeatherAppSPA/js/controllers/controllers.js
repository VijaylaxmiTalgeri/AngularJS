//Controllers
(function() {

	var weatherApp = angular.module('weatherForecastApp');
	
	weatherApp.controller('homeController', ['$scope','cityService', function($scope, cityService){
			$scope.city = cityService.city; // Default City from CityService

			$scope.$watch('city', function() {	// Keep watching for value change in city
				cityService.city = $scope.city;

			});
	}]);

	weatherApp.controller('forecastController', ['$scope','$resource','$routeParams','cityService', 'weatherService',
		                                        function($scope, $resource, $routeParams, cityService, weatherService){
			$scope.city = cityService.city; // Default Value
			$scope.days = $routeParams.days || '2'; // Default 2 day

			$scope.weatherResult = weatherService.getWeatherService($scope.city, $scope.days); // Call the weather service 
			$scope.convertToCelsius = function(degreeKelvin) {
				return Math.round(degreeKelvin - 273.15);
			};
			$scope.getFormattedDate = function(date) {
				return new Date(date * 1000 );
			};
	}]);
})();