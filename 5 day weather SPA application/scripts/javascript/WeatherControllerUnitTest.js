describe("Weather List controller", function () {
    var controller;
    var dataAccessService;
    var $httpBackend;
    beforeEach(function () {
        angular.mock.module("weatherInformation");
    });
    beforeEach(inject(function ($rootScope, _$httpBackend_, _dataAccessService_) {
        dataAccessService = _dataAccessService_;
        $httpBackend = _$httpBackend_;
    }));
    it("should create the weather controller", function () {
        controller = new WeatherListCtrl(dataAccessService);
        expect(controller).not.toBeNull();
    });
    it("should create the weather controller and return 6 items within the result.list", function () {
        controller = new WeatherListCtrl(dataAccessService);
        expect(controller).not.toBeNull();
        var result = controller.list;
        expect(result.length).toBe(6);
    });
    it("should create the weather controller and return city details", function () {
        controller = new WeatherListCtrl(dataAccessService);
        expect(controller).not.toBeNull();
        var result = controller.city;
        expect(result).not.toBeNull();
    });
    it("should create the weather controller and return weather from Bonnyrigg", function () {
        controller = new WeatherListCtrl(dataAccessService);
        expect(controller).not.toBeNull();
        var result = controller.city;
        expect(result.name).toBe("Bonnyrigg");
    });
});
//# sourceMappingURL=C:/Users/John Hood/Documents/Visual Studio 2015/Projects/Lloyds/5 day weather SPA application/5 day weather SPA application/scripts/mappings/WeatherControllerUnitTest.js.map