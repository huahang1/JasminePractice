angular.module('desserts',[]).value('DessertValues',{
    pies:[
        {flavor:"Cherry",score:6},
        {flavor:"Apple",scope:7.5},
        {flavor:"Peach",score:4}
    ]
});

angular.module('desserts').factory('DessertManager',
['DessertValues',
    function (dessertValues) {
        return{

            pieFlavors:function () {
                //this map method creates an new array which contains every element in chosen array
                //this function(pie) is the callback and pie is the new array which contains the new element of previous array
                return dessertValues.pies.map(function (pie) {
                    return pie.flavor;
                });
            }
        };
}]);