class ChristmasDinner {
    constructor(budget) {
        this.budget = budget;
        this.products = [];
        this.dishes = [];
        this.guests = {};
    }

    get budget() {
        return this._budget;
    }

    set budget(value) {
        if (value < 0) {
            throw new Error("The budget cannot be a negative number");
        }
        return this._budget = value;
    }

    shopping(product) {
        let [product, price] = product;
        if (this.budget < price) {
            throw new Error("Not enough money to buy this product");
        }

        this.products.push(product);
        this.budget -= price;
        return `You have successfully bought ${product}!`;
    }

    recipes(recipe) {
        const productsList = recipe.productsList;
        const recipeName = recipe.recipeName;

        productsList.forEach((el) => {
            if (!this.products.includes(el)) {
                throw new Error("We do not have this product");
            }
        });

        this.dishes.push({ recipeName, productsList });
        return `${recipeName} has been successfully cooked!`;
    }

    inviteGuests(name, dish) {
        if (!this.dishes.values(dish)) {
            return "We do not have this dish";
        } else if (this.guests[name]) {
            throw new Error("This guest has already been invited");
        }

        this.guests[name] = dish;
        return `You have successfully invited ${name}!`;
    }

    showAttendance() {
        let result = [];
        for (const name in this.guests) {
            let dish = this.guests[name];
            let products = this.dishes.find((el) => el.recipeName == dish)
            result.push(`${name} will eat ${dish}, which consists of ${products.productsList.join(', ')}`);
        }
        return result.join('\n').trimEnd();
    }
}



let dinner = new ChristmasDinner(300);

dinner.shopping(['Salt', 1]);
dinner.shopping(['Beans', 3]);
dinner.shopping(['Cabbage', 4]);
dinner.shopping(['Rice', 2]);
dinner.shopping(['Savory', 1]);
dinner.shopping(['Peppers', 1]);
dinner.shopping(['Fruits', 40]);
dinner.shopping(['Honey', 10]);

dinner.recipes({
    recipeName: 'Oshav',
    productsList: ['Fruits', 'Honey']
});
dinner.recipes({
    recipeName: 'Folded cabbage leaves filled with rice',
    productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
});
dinner.recipes({
    recipeName: 'Peppers filled with beans',
    productsList: ['Beans', 'Peppers', 'Salt']
});

dinner.inviteGuests('Ivan', 'Oshav');
dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice');
dinner.inviteGuests('Georgi', 'Peppers filled with beans');

console.log(dinner.showAttendance());
