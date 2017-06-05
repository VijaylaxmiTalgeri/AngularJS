( function() {
	var weatherApp = angular.module('weatherForecastApp');
	
	weatherApp.service('cityService', function(){
			this.city = "New York, NY"; // Default City value
	});

	weatherApp.config(function ($sceProvider) {	// Strict Contextual Escaping
    				$sceProvider.enabled(false);
	});

	weatherApp.service('weatherService', ['$resource', function($resource) {
		this.getWeatherService = function(city, days) {
			var weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily?id=524901&APPID=4ced2c7bd871c39dae8177bf54a3b664");
			return weatherAPI.get({'q': city, 'cnt': days });
		}

	}]);
})();