/*
AngularJS servicer build in type script

*/
module app.common
{
    interface IDataAccessService
    {
        getWeatherForecast(callback)
    }

    export class DataAccessService implements IDataAccessService
    {
        getWeatherForecast(callback)
        {
            $.ajax({
                type: 'POST',
                async: false,
                url: 'http://api.openweathermap.org/data/2.5/forecast?id=2655210&APPID=55261c20bdb2d48d8cef008d00c33582',
                success: callback,
                error: function (request, status, error)
                {
                    var datas = {};
                    return datas;
                }
            });
        }
    }

    angular.module("common.data.service")
        .service("dataAccessService", DataAccessService);
}