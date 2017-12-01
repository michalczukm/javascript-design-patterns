/**
 * Functions composition 
 * 
 * Sometimes we want to build a function, and then to run it with another function.
 * Or just curry one function to another
 */

const pizzaFactory = require('./3-another-factory');
const delivery = require('./utils/pizza-delivery');

function pizzaDeliveryFactory(method) {
    switch (method) {
        case 'on side':
            // return delivery.onSideDelivery; // this is enough - will do the job.
            return (pizzaSet) => delivery.onSideDelivery(pizzaSet);
        case 'external':
            return (pizzaSet) => delivery.externalProviderDelivery(pizzaSet);
        case 'internet':
            return (pizzaSet) => delivery.internetDelivery(pizzaSet);
        default:
            throw new Error(`ups, no such delivery method as ${method}`)
    }
}

module.exports = () => {
    const method = 'internet';
    const pizzaSet = [pizzaFactory.create('hawaiian').value];
    
    return pizzaDeliveryFactory(method)(pizzaSet);
};
