/**
 * Class in es6 - kinda module
 * 
 * Problem - everything in class is public. Also - fields.
 * Pros - we can instantiate it
 */

// only this function is indeed private
const handlePizza = () => console.log(pizza.name);

// export only what we want
module.exports = class PizzaHouse {
    constructor() {
        this.pizzaMenuSet = [];
        this.customers = [];
    }

    addCustomer(customer) {
        this.customers.push(customer);
    }

    getCustomers() {
        return this.customers;
    }

    handleOrder(order) {
        order.pizzaSet.forEach(pizza => handlePizza);
    }
}