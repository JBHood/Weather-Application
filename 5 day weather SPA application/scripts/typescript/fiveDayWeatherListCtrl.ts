
/*
AngularJS Controller build in type script

*/

// View Model Contract
interface IWeatherListModel
{
     city: Forecast,
     list: WeatherList[]
}

interface IForecast
{
    name: string,
    list: WeatherList
}

class Forecast implements IForecast
{
    name: string;
    list: WeatherList;

    constructor(jsonData: any)
    {
        $.extend(this, jsonData);

        if (jsonData.list)
            this.list = $.map(jsonData.list, (lst) =>
            {
                return new WeatherList(lst);
            });

    }
}

class WeatherList
{
    dt: number;
    main: MainWeather;
    weather: any[];
    dt_txt: string

    constructor(jsonData: any)
    {
        $.extend(this, jsonData);
    }

}

class MainWeather
{
    temp: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    sea_level: number;
    grnd_level: number;
    humitity: number
}

class WeatherListCtrl implements IWeatherListModel
{

    city: Forecast;
    list: WeatherList[];

    static $inject = ["dataAccessService"];
    constructor(dataAccessService: app.common.DataAccessService)
    {
         dataAccessService.getWeatherForecast(this.setUpViewModel);

    }

    /*service call back*/
    public setUpViewModel = (result) =>
    {

        this.city = new Forecast(result['city']);
        this.list = result['list'];
        this.list.length = 6;

    }
}

angular.module("weatherInformation")
    .controller("WeatherListCtrl", WeatherListCtrl);