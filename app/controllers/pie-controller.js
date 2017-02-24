angular.module('pie',[]).controller('PieController',
    ['$scope', 'DessertManager',
    function ($scope,dessertManager) {

    //Listeners
        $scope.$on("pieHasBeenDeleted",function () {
            $scope.warning = "Red Alert";
            $scope.slices = 0;
        });

    //Watchers
    function compareAndWarn(newVal,oldVal) {
        var props = [];
        if (newVal && oldVal){
            for (var key in newVal){
                if (newVal[key] > oldVal[key]){
                    props.push(key.charAt(0).toUpperCase() + key.slice(1));
                }
            }
        }
        return props;
    }

    $scope.$watch('nutritionalValue',function (newVal,oldVal) {
        var props = compareAndWarn(newVal,oldVal);
        if (props && props.length){
            //array.join is used to join each element in array with the separator
            $scope.warning = props.join(", ") + " have gone up! ";
        }else{
            $scope.warning = null;
        }
    },true);

        //Action Handlers
        $scope.eatSlice = function () {
            if ($scope.slices){
                $scope.slices--;
            }
        };

        this.requestFlavor = function (flavor) {
            $scope.lastRequestedFlavor = flavor;
        }

        $scope.lastRequestedFlavor;
        $scope.nutritionalValue = {calories:500,fat:200,carbs:100};
        $scope.warning = null;
        $scope.slices = 8;

    }]);