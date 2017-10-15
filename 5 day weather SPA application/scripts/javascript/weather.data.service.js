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