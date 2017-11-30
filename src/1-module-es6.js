/**
 * Module in es6
 * 
 * Every file is a module, we control what we export via exports
 */

_pizzaMenuSet = [];
_customers = [];

_handlePizza = () => console.log(pizza.name);

function addCustomer(customer) {
    _customers.push(customer);
};

function getCustomers() {
    return _customers;
};

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
    handleOrder
};