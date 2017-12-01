/**
 * Strategy
 * 
 * Delegate a task to external class/function and use it as you need it.
 * Totally do not make God Class which can do everything.
 * 
 * But ... there is one problem with this pattern in JavaScript - we have no interfaces!
 * We can do duck typing, but lets try to solve it in another way.
 */
const pizzaFactory = require('./3-another-factory');
const delivery = require('./utils/pizza-delivery');

const orderService = (function() {
    _callDelivery = (callMethod) => {
        console.log(callMethod());
    }

    const placeOrder = (pizzaOrderList, method) => {
        const pizzaSet = pizzaOrderList.map(item => pizzaFactory.create(item)).filter(result => result.isSuccess).map(result => result.value);

        let callMethod;
        switch (method) {
            case 'on side':
                callMethod = () => delivery.onSideDelivery(pizzaSet);
                break;
            case 'external':
                callMethod = () => delivery.externalProviderDelivery(pizzaSet);
                break;
            case 'internet':
                callMethod = () => delivery.internetDelivery(pizzaSet);
                break;
            default:
                throw new Error(`ups, no such delivery method as ${method}`)
        }

        _callDelivery(callMethod);
    };

    return {
        placeOrder: placeOrder
    };
})();
 

module.exports = orderService;