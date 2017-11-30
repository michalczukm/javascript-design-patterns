/**
 * Module in es5
 * 
 * Create variable, and assign IFFY to it.
 * Only returned methods/fields are public
 */

// export only what we want
const pizzaHouse = (function () {
    _pizzaMenuSet = [];
    _customers = [];

    _handlePizza = () => console.log(pizza.name);

    function addCustomer(customer) {
        _customers.push(customer);
    }

    function getCustomers() {
        return _customers;
    }

    function handleOrder(order) {
        order.pizzaSet.forEach(pizza => _handlePizza);
    }

    return {
        addCustomer,
        getCustomers,
        handleOrder
    }
})();

module.exports = pizzaHouse;