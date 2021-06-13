function solve (type, weightInGrams, pricePerKg) {
    let weightInKg = weightInGrams/1000;
    let totalPrice = weightInKg*pricePerKg;

    return `I need $${totalPrice.toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${type}.`;
}

console.log(solve('orange', 2500, 1.80));