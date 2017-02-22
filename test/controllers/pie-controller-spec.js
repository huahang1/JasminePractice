describe("PieController",function () {
    var $rootScope,
        $scope,
        controller;

    //beforeEach is used to get the $rootScope and $scope value from specific module
    beforeEach(function () {

        module('pie');

        inject(function ($injector) {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            controller = $injector.get('$controller')("PieController",{$scope:$scope});
        });
    });

    //create test for verify the instantiate value in controller
    describe("Initialization",function () {
        it("should instantiate slices to 8",function () {
            expect($scope.slices).toEqual(8);
        });
    });

    //create test for testing the action in controller
    describe("Action Handlers",function () {

        describe("eatSlice",function () {

            it("Should decrement the number of slices",function () {
                expect($scope.slices).toEqual(8);
                $scope.eatSlice();
                expect($scope.slices).toEqual(7);
            });

            it("Should do nothing when slice is 0",function () {
                $scope.slices = 0;
                $scope.eatSlice();
                expect($scope.slices).toEqual(0);
            })

        })
    })
});