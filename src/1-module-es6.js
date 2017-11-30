/**
 * Module in es6
 * 
 * Every file is a module, we control what we export via exports
 */

_pizzaMenuSet = ['pepperoni', 'hawaiian', 'margherita'];
_customers = [];

_handlePizza = () => console.log(pizza.name);

function addCustomer(customer) {
    _customers.push(customer);
};

function getCustomers() {
    return _customers;
};

function canMakePizza(type) {
    return _pizzaMenuSet.includes(type);
}

function handleOrder (order) {
    order.pizzaSet.forEach(pizza => _handlePizza);
};

/**
 * es6 in browser:
 * export { addCustomer, getCustomers, handleOrder }
 */

module.exports = {
    addCustomer,
    getCustomers,
    handleOrder,
    canMakePizza
};