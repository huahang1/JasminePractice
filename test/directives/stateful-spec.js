describe("nsStateful",function () {
    var $rootScope,
        $scope,
        $compile,
        el,
        $body = $('body'),
        simpleHtml = '<button ns-stateful="red"></button>';

    beforeEach(function () {
        module('directives');

        inject(function ($injector) {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            $compile = $injector.get('$compile');
            //angular.element is the similar way to jQuery, if jQuery is not available, angualr has its built-in jqLite
            //the $scope after this is used to combine this function to current scope
            el = $compile(angular.element(simpleHtml))($scope);
        });

        $body.append(el);
        $rootScope.$digest();
    });

    //angualrjs doesn't recommend the way of manipulating DOM directly1
    it("Should be able to toggle the class based on clicks",function () {
        expect(el.hasClass('red')).toBeFalsy();
        //use triggerHandler instead of calling the method directly
        el.triggerHandler('click');
        // el.click();
        $scope.$digest();
        expect(el.hasClass('red')).toBeTruthy();
        // el.click();
        el.triggerHandler('click');
        $scope.$digest();
        expect(el.hasClass('red')).toBeFalsy();
        // el.click();
        el.triggerHandler('click');
        $scope.$digest();
        expect(el.hasClass('red')).toBeTruthy();

    });

    it("Should throw exception if no value passed into the directive",function () {
        expect(function () {
            $compile(angular.element('<a ns-stateful></a>'))($scope);
        }).toThrow();
    })
});