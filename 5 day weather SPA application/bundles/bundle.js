var app;
(function (app) {
    var common;
    (function (common) {
        angular.module("common.data.service", ["ngResource"]);
    })(common = app.common || (app.common = {}));
})(app || (app = {}));
//# sourceMappingURL=C:/Users/John Hood/Documents/Visual Studio 2015/Projects/Lloyds/5 day weather SPA application/5 day weather SPA application/scripts/mappings/app.common.js.map
var app;
(function (app) {
    angular.module("weatherInformation", ["common.data.service"]);
})(app || (app = {}));
//# sourceMappingURL=C:/Users/John Hood/Documents/Visual Studio 2015/Projects/Lloyds/5 day weather SPA application/5 day weather SPA application/scripts/mappings/app.js.map
var Forecast = (function () {
    function Forecast(jsonData) {
        $.extend(this, jsonData);
        if (jsonData.list)
            this.list = $.map(jsonData.list, function (lst) {
                return new WeatherList(lst);
            });
    }
    return Forecast;
}());
var WeatherList = (function () {
    function WeatherList(jsonData) {
        $.extend(this, jsonData);
    }
    return WeatherList;
}());
var MainWeather = (function () {
    function MainWeather() {
    }
    return MainWeather;
}());
var WeatherListCtrl = (function () {
    function WeatherListCtrl(dataAccessService) {
        var _this = this;
        this.setUpViewModel = function (result) {
            _this.city = new Forecast(result['city']);
            _this.list = result['list'];
            _this.list.length = 6;
        };
        dataAccessService.getWeatherForecast(this.setUpViewModel);
    }
    WeatherListCtrl.$inject = ["dataAccessService"];
    return WeatherListCtrl;
}());
angular.module("weatherInformation")
    .controller("WeatherListCtrl", WeatherListCtrl);
//# sourceMappingURL=C:/Users/John Hood/Documents/Visual Studio 2015/Projects/Lloyds/5 day weather SPA application/5 day weather SPA application/scripts/mappings/fiveDayWeatherListCtrl.js.map
var app;
(function (app) {
    var common;
    (function (common) {
        var DataAccessService = (function () {
            function DataAccessService() {
            }
            DataAccessService.prototype.getWeatherForecast = function (callback) {
                $.ajax({
                    type: 'POST',
                    async: false,
                    url: 'http://api.openweathermap.org/data/2.5/forecast?id=2655210&APPID=55261c20bdb2d48d8cef008d00c33582',
                    success: callback,
                    error: function (request, status, error) {
                        var datas = {};
                        return datas;
                    }
                });
            };
            return DataAccessService;
        }());
        common.DataAccessService = DataAccessService;
        angular.module("common.data.service")
            .service("dataAccessService", DataAccessService);
    })(common = app.common || (app.common = {}));
})(app || (app = {}));
//# sourceMappingURL=C:/Users/John Hood/Documents/Visual Studio 2015/Projects/Lloyds/5 day weather SPA application/5 day weather SPA application/scripts/mappings/weather.data.service.js.map