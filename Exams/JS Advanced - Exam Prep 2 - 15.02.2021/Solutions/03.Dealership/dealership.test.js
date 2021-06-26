const dealership = require('./dealership');
const {asser, assert} = require('chai');

describe("dealership tests", () => {
    describe("newCarCost tests",  () => {

        it("Should reduce the price if returning a car that exists",  () => {
            let carModel =  'Audi A4 B8';
            let newCarPrice = 100000;
            let expectedResult = 85000;
            let actualResult = dealership.newCarCost(carModel,newCarPrice);
            assert.equal(actualResult, expectedResult);
        });
        it("Should reduce the price if returning a car that exists",  () => {
            let carModel =  'Audi A6 4K';
            let newCarPrice = 100000;
            let expectedResult = 80000;
            let actualResult = dealership.newCarCost(carModel,newCarPrice);
            assert.equal(actualResult, expectedResult);
        });

        it("Should reduce the price if returning a car that exists",  () => {
            let carModel =  'Audi A8 D5';
            let newCarPrice = 100000;
            let expectedResult = 75000
            let actualResult = dealership.newCarCost(carModel,newCarPrice);
            assert.equal(actualResult, expectedResult);
        });

        it("Should reduce the price if returning a car that exists",  () => {
            let carModel =  'Audi TT 8J';
            let newCarPrice = 100000;
            let expectedResult = 86000;
            let actualResult = dealership.newCarCost(carModel,newCarPrice);
            assert.equal(actualResult, expectedResult);
        });
        it("Should return the original price",  () => {
            let carModel =  'Audi';
            let newCarPrice = 100000;
            let expectedResult = 100000;
            let actualResult = dealership.newCarCost(carModel,newCarPrice);
            assert.equal(actualResult, expectedResult);
        });
     });


     describe("carEquipment tests",  () => {
        it("Should return the wanted extra",  () => {
            let extras = ['heated seats', 'sliding roof', 'sport rims', 'navigation', 'multimedia'];
            let wantedExtras = [0];
            let expectedResult = ['heated seats'];
            let actualResult = dealership.carEquipment(extras, wantedExtras);
            assert.deepEqual(actualResult, expectedResult);
        });
        it("Should return the wanted extras",  () => {
            let extras = ['heated seats', 'sliding roof', 'sport rims', 'navigation', 'multimedia'];
            let wantedExtras = [1,2,3];
            let expectedResult = ['sliding roof', 'sport rims', 'navigation'];
            let actualResult = dealership.carEquipment(extras, wantedExtras);
            assert.deepEqual(actualResult, expectedResult);
        });
        it("Should return empty array when no extras are wanted",  () => {
            let extras = ['heated seats', 'sliding roof', 'sport rims', 'navigation', 'multimedia'];
            let wantedExtras = [];
            let expectedResult = [];
            let actualResult = dealership.carEquipment(extras, wantedExtras);
            assert.deepEqual(expectedResult, actualResult);
        });

     });


     describe("euroCategory tests",  () => {
        it("Should return the price without discount if less than 4",  () => {
            let number = 3;
            let expectedResult = 'Your euro category is low, so there is no discount from the final price!';
            let actualResult = dealership.euroCategory(number);
            assert.equal(actualResult, expectedResult);
        });

        it("Should return the price with discount if more than or equal to 4",  () => {
            let number = 4;
            let price = dealership.newCarCost('Audi A4 B8', 30000);
            let total = price - (price * 0.05)
            let expectedResult = `We have added 5% discount to the final price: ${total}.`;
            let actualResult = dealership.euroCategory(number);
            assert.equal(actualResult, expectedResult);
        });

     });
});
