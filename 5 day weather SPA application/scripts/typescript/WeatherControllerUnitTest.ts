describe("Weather List controller", function ()
{
    var controller: WeatherListCtrl;
    var dataAccessService: app.common.DataAccessService;
    var $httpBackend: ng.IHttpBackendService;

    beforeEach(function ()
    {
        angular.mock.module("weatherInformation");
    });

    beforeEach(inject(function (
        $rootScope: ng.IRootScopeService,
        _$httpBackend_: ng.IHttpBackendService,
        _dataAccessService_: app.common.DataAccessService)
    {
        dataAccessService = _dataAccessService_;
        $httpBackend = _$httpBackend_;
    }));


    it("should create the weather controller", () =>
    {
        controller = new WeatherListCtrl(dataAccessService)
        expect(controller).not.toBeNull();

    });

    it("should create the weather controller and return 6 items within the result.list", () =>
    {
        controller = new WeatherListCtrl(dataAccessService)
        expect(controller).not.toBeNull();

        var result = controller.list;
        expect(result.length).toBe(6);
        
    });

    it("should create the weather controller and return city details", () =>
    {
        controller = new WeatherListCtrl(dataAccessService)
        expect(controller).not.toBeNull();

        var result = controller.city;
        expect(result).not.toBeNull();
        
    });

    it("should create the weather controller and return weather from Bonnyrigg", () =>
    {
        controller = new WeatherListCtrl(dataAccessService)
        expect(controller).not.toBeNull();

        var result = controller.city;
        expect(result.name).toBe("Bonnyrigg");
    });
});