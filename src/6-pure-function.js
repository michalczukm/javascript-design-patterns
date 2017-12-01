/**
 * Pure functions
 * 
 * Check how easy you can improve your code and reduce complex state management.
 */
module.exports = pizzaHouse = (function () {
    const _pizzaMenuSet = ['pepperoni', 'hawaiian', 'margherita'];
    let _customers = [
        {name: 'Jan', isActive: true, lastSeen: 2015},
        {name: 'Monika', isActive: true, lastSeen: 2017},
        {name: 'Andrzej', isActive: false, lastSeen: 2017}
    ];

    // impure
    const _removeInActive = () => {
        _customers = _customers.filter(customer => customer.isActive && customer.lastSeen >= 2017);
    }

    // pure
    const _getActive = (customers) => {
        return customers.filter(customer => customer.isActive && customer.lastSeen >= 2017);
    }

    function validateCustomersBase() {
        // _removeInActive();
        _customers = _getActive(_customers);
        return _customers;
    }

    return {
        validateCustomersBase
    }
})();