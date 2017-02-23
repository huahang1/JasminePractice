describe("nsTextAndSub",function () {
    var $rootScope,
        $scope,
        $compile,
        el,
        $el,
        $body = $('body'),
        simpleHtml = '<ns-text-and-sub text="{{scopeText}}" sub="{{scopeSub}}"></ns-text-and-sub>';

    beforeEach(function () {
        module('templates','directives');

        inject(function ($injector) {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            $compile = $injector.get('$compile');
            el = $compile(angular.element(simpleHtml))($scope);
        });

        $body.append(el);
        $rootScope.$digest();

        $el = $('.text-and-sub');
    });

    afterEach(function () {
        $body.empty();
    });

    it("Should render the directive out in the dom",function () {
        expect($el.length).toEqual(1);
    });

    it("Should render out the text when given in scope",function () {
        $scope.scopeText = "Google Company";
        $scope.$digest();
        expect($el.find('h3').text()).toEqual("Google Company");
    });

    it("Should render out the sub when given in scope",function () {
        $scope.scopeSub = "FaceBook Company";
        $scope.$digest();
        expect($el.find('h5').text()).toEqual('FaceBook Company');
    });

    it("Should hide the sub text when it is not defined",function () {
        expect($el.find('h5').is(":visible")).toBeFalsy();
    });

    it("Shouold know the sub text when it is defined",function () {
        $scope.scopeSub = "FaceBook Company";
        $scope.$digest();
        expect($el.find('h5').is(":visible")).toBeTruthy();
    });
});