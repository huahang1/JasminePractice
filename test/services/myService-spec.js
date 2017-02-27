describe('myServiceTest',function () {
    describe('when I call myService.one',function () {
        it('should return 1',function () {
            var $injector = angular.injector(['myModule']);
            var myService = $injector.get('myService');
            expect(myService.one).toEqual(1);
        })
    })
});