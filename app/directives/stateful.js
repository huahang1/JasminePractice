angular.module('directives',[]).directive('nsStateful',
function () {
    return {
        restrict:'A',
        scope:false,
        link:function (scope,element,attrs) {

            if (!attrs.nsStateful){
                throw "You must provide a class name in order to use the nsStateful directive.";
            }

            //bind this click event to some specific code,
            //angular.element manipulate DOM direcly, just like jQuery. If jQuery is available, this is an alias for jQuery, if not Angular has its built-in function called jqLite
            element.bind("click",function (e) {

                scope.$apply(function () {
                    if (!element.hasClass(attrs.nsStateful)){
                        element.addClass(attrs.nsStateful);
                    }else{
                        element.removeClass(attrs.nsStateful);
                    }
                });

            });

            //bind method is deprecated, we shouold use 'on', but bind still works
            // element.on("click",function (e) {
            //
            //     scope.$apply(function () {
            //         if (!element.hasClass(attrs.nsStateful)){
            //             element.addClass(attrs.nsStateful);
            //         }else{
            //             element.removeClass(attrs.nsStateful);
            //         }
            //     });
            //
            // });

        }
    }
});