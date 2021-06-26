const numberOperations = require('./numberOperations');
const {assert} = require('chai');

describe("numberOperations tests", () => {
    describe("powNumber tests", () => {
        it("Should return the power",() => {
            let number = 5;
            let expectedResult = 25;
            let actualResult = numberOperations.powNumber(number);
            assert.equal(actualResult,expectedResult);
        });
     });


     describe("numberChecker tests", () => {
        it("Should throw error if the input is not a number",() => {
            let input = 'chislo';
            assert.throws(() => numberOperations.numberChecker(input), 'The input is not a number!')
        });
        it("Should return a message if more than or equal to 100",() => {
            let number = '100';
            let expectedResult = 'The number is greater or equal to 100!';
            let actualResult = numberOperations.numberChecker(number);
            assert.equal(actualResult,expectedResult);
        });
        it("Should return a message if less than 100",() => {
            let number = '99';
            let expectedResult = 'The number is lower than 100!';
            let actualResult = numberOperations.numberChecker(number);
            assert.equal(actualResult,expectedResult);
        });
        it("Should return a message if less than 100, passing a number",() => {
            let number = 99;
            let expectedResult = 'The number is lower than 100!';
            let actualResult = numberOperations.numberChecker(number);
            assert.equal(actualResult,expectedResult);
        });
     });


     describe("sumArrays tests", () => {
        it("Should return an empty array",() => {
            let array1 = [];
            let array2= [];
            let expectedResult = [];
            let actualResult = numberOperations.sumArrays(array1,array2);
            assert.deepEqual(actualResult,expectedResult);
        });
        it("Should return an array if the lenght is equal",() => {
            let array1 = [1,2,3,4];
            let array2= [5,6,7,8];
            let expectedResult = [6,8,10,12];
            let actualResult = numberOperations.sumArrays(array1,array2);
            assert.deepEqual(actualResult,expectedResult);
        });
        it("Should return an array if the lenght is different",() => {
            let array1 = [1,2,3,4,5];
            let array2= [5,6,7,8];
            let expectedResult = [6,8,10,12,5];
            let actualResult = numberOperations.sumArrays(array1,array2);
            assert.deepEqual(actualResult,expectedResult);
        });
     });
});
