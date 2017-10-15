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