describe("PieController",function () {

    var $rootScope,
        $scope,
        dessertManager,
        controller;

    //beforeEach is used to get the $rootScope and $scope value from specific module
    beforeEach(function () {

        // module.apply(this,Dessert.Dependencies);
        module('pie','desserts');

        inject(function ($injector) {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            dessertManager = $injector.get('DessertManager');
            controller = $injector.get('$controller')("PieController",{$scope:$scope});
        });

        $scope.$digest();

    });
    
    describe("Listeners",function () {
        describe("pieHasBeenDeleted",function () {

            it("Should set the warning to Red Alert",function () {
                $rootScope.$broadcast("pieHasBeenDeleted");
                $scope.$digest();
                expect($scope.warning).toEqual("Red Alert");
            })

            it("Should set the slices to zero",function () {
                $rootScope.$broadcast("pieHasBeenDeleted");
                $scope.$digest();
                expect($scope.slices).toEqual(0);
            })
        });
    });

    //test for watcher
    describe("Watchers",function () {

        describe("nutritionalValue",function () {
            it("Should set the warning that Carbs have gone up, when only carbs go up",function () {
                $scope.nutritionalValue.carbs++;
                $scope.$digest();
                expect($scope.warning).toEqual("Carbs have gone up! ");
            });

            it("Should set the warning that fat have gone up, when only fat go up",function () {
                $scope.nutritionalValue.fat++;
                $scope.$digest();
                expect($scope.warning).toEqual("Fat have gone up! ");
            });

            it("Should set the warning that colories have gone up, when only calories go up",function () {
                $scope.nutritionalValue.calories++;
                $scope.$digest();
                expect($scope.warning).toEqual("Calories have gone up! ");
            });

            it("Should set the warning that a combination has gone up, when only carbs go up",function () {
                $scope.nutritionalValue.calories++;
                $scope.nutritionalValue.fat++;
                $scope.nutritionalValue.carbs++;
                $scope.$digest();
                expect($scope.warning).toEqual("Calories, Fat, Carbs have gone up! ");
            });

            it("Should set the warning to null if nothing goes up",function () {
                expect($scope.warning).toBeNull();
            });

            it("Should set the warning to null if nothing has gone up, even if some things goes down ",function () {
                $scope.nutritionalValue.calories--;
                $scope.nutritionalValue.fat--;
                $scope.nutritionalValue.carbs--;
                $scope.$digest();
                expect($scope.warning).toBeNull();
            });
        })
    })

    //create test for verify the instantiate value in controller
    describe("Initialization",function () {

        it("Should instantiate nutritionalValue to its default",function () {
            expect($scope.nutritionalValue).toEqual({calories:500,fat:200,carbs:100});
        });

        it("Should instantiate warning to null",function () {
            expect($scope.warning).toBeNull();
        });

        it("should instantiate slices to 8",function () {
            expect($scope.slices).toEqual(8);
        });

        //test 'this' method's instantiation
        it("should instantiate $scope.lastRequestedFlavor", function () {
            expect($scope.lastRequestedFlavor).toBeUndefined();
        });


    });

    //create test for testing the action in controller
    describe("Action Handlers",function () {

        //test the action method
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
            });

        });

        //test this method to see weather it set the passed argument or not
        describe("requestFlavor",function () {
            it("Should set $scope.lastRequestFlavor to the passed in argument",function () {
                controller.requestFlavor('Cherry');
                expect($scope.lastRequestedFlavor).toEqual('Cherry');
            });
        });

    });
});