angular.module('directives').directive('nsTextAndSub',
function () {
    return{
        restrict:'E',
        templateUrl:'app/directives/text-and-sub.html',
        scope:{
            //@ means this supports for the {{}} usuage
            text:"@",
            sub:"@"
        },
        link:function (scope,element,attrs) {
            
        }
    }
})