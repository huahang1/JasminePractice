describe("DessertManager",function () {
    var values, factory;
    
    //beforeEach is used to get all the values from angular component
    beforeEach(function () {
        module('desserts');

        inject(function ($injector) {
            values = $injector.get('DessertValues');
            factory = $injector.get('DessertManager');
        });
    });

    //test init values of angular module
    describe("DessertValues",function () {

        it("Should instantiate with 3 pie flavors",function () {
            expect(values.pies).toEqual([
                {flavor:"Cherry",score:6},
                {flavor:"Apple",scope:7.5},
                {flavor:"Peach",score:4}
            ]);
        });
    });

    //test factory part
    describe("DessertManager",function () {

        describe("pieFlavors",function () {

            it("Should return 3 pie flavor strings",function () {
                var flavors = factory.pieFlavors();
                expect(flavors.length).toEqual(3);
                expect(flavors[0]).toEqual("Cherry");
                expect(flavors[1]).toEqual("Apple");
                expect(flavors[2]).toEqual("Peach");
            });

            it("Should throw an error if there are no pies",function () {
                values.pies = null;
                expect(function () {
                    factory.pieFlavors();
                }).toThrow();

                values.pies = [
                    {flavor:"Cherry",score:6},
                    {flavor:"Apple",scope:7.5},
                    {flavor:"Peach",score:4}
                ];
            });
        });
    });
});