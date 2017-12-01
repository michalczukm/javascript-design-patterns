/**
 * Module in es5
 * 
 * Create variable, and assign IFFY to it.
 * Only returned methods/fields are public
 */

const pizzaHouse = (function () {
    _pizzaMenuSet = ['pepperoni', 'hawaiian', 'margherita'];
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

    // export only what we want    
    return {
        addCustomer,
        getCustomers,
        handleOrder
    }
})();

module.exports = pizzaHouse;