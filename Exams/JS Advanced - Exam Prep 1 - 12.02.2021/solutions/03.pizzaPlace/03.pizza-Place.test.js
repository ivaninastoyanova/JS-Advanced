const pizzUni = require('./03.pizza-Place');
const {assert, expect} = require('chai');


describe("pizzUni tests", () => {

    describe("makeAnOrder tests", () => {

        it("Should return a positive message when pizza is ordered", () => {
            let order = {
                orderedPizza : 'Margarita',
            }
            let expectedResult = `You just ordered ${order.orderedPizza}`;
            let actualResult = pizzUni.makeAnOrder(order);

            assert.equal(actualResult, expectedResult);
        });

        it("Should return a positive message when pizza and drink are ordered", () => {
            let order = {
                orderedPizza : 'Margarita',
                orderedDrink: 'Coke',
            }
            let expectedResult = `You just ordered ${order.orderedPizza} and ${order.orderedDrink}.`;
            let actualResult = pizzUni.makeAnOrder(order);

            assert.equal(actualResult, expectedResult);
        });

        it("Should throw an error when empty object is passed", () => {
            let order = {}

            assert.throws(() => pizzUni.makeAnOrder(order), 
                  'You must order at least 1 Pizza to finish the order.' );
        });

        it("Should throw an error when pizza is not passed", () => {
            let order = {
                orderedDrink: 'Soda',
            }

            assert.throws(() => pizzUni.makeAnOrder(order), 
                  'You must order at least 1 Pizza to finish the order.' );
        });
     });


     describe("getRemainingWork tests", () => {

        it("Should return a positive message if an order is ready", () => {
            let input = [{
                pizzaName: 'Nqkakva', 
                status: 'ready',
            }]
            let expectedResult = 'All orders are complete!';
            let actualResult = pizzUni.getRemainingWork(input);

            assert.equal(actualResult, expectedResult);
        });
        it("Should return a positive message if all orders are ready", () => {
            let input = [{
                pizzaName: 'Nqkakva', 
                status: 'ready',
            },
            {
                pizzaName: 'Druga', 
                status: 'ready',
            }
        ]
            let expectedResult = 'All orders are complete!';
            let actualResult = pizzUni.getRemainingWork(input);

            assert.equal(actualResult, expectedResult);
        });
        it("Should return the only praparing pizza", () => {
            let input = [{
                pizzaName: 'Salami', 
                status: 'preparing',
            }]
            let expectedResult = 'The following pizzas are still preparing: Salami.';
            let actualResult = pizzUni.getRemainingWork(input);

            assert.equal(actualResult, expectedResult);
        });

        it("Should return the only praparing pizza", () => {
            let input = [{
                pizzaName: 'Salami', 
                status: 'preparing',
            },
            {
                pizzaName: 'Peperoni', 
                status: 'preparing',
            }]
            let expectedResult = 'The following pizzas are still preparing: Salami, Peperoni.';
            let actualResult = pizzUni.getRemainingWork(input);

            assert.equal(actualResult, expectedResult);
        });
     });



     describe("orderType tests", () => {
        it("Should return the original price", () => {
            let money= 10;
            let typeOfOrder = 'Delivery';

            let expectedResult = 10;
            let actualResult = pizzUni.orderType(money, typeOfOrder);

            assert.equal(actualResult, expectedResult);
        });

        it("Should return the price with discount", () => {
            let money= 10;
            let typeOfOrder = 'Carry Out';

            let expectedResult = 9;
            let actualResult = pizzUni.orderType(money, typeOfOrder);

            assert.equal(actualResult, expectedResult);
        });
     });
});
