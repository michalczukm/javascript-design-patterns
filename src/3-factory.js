/**
 * Factory
 * 
 * Encapsulate all logic behind creating object - for some parameter
 * in one place.
 * 
 * Here - lets create pizza with ingredients, depending on its type.
 */
class Pizza {
    constructor(...ingredients) {
        this.ingredients = [...ingredients, 'cheese'];
    }
}

const pizzaFactory = (function() {
    const create = (type) => {
        switch (type) {
            case 'pepperoni':
                return new Pizza('pepperoni');
            case 'hawaiian':
                return new Pizza('pineapple', 'ham');
            default:
                return new Pizza();
        }
    };

    return {
        create: create
    };
})();
 

module.exports = pizzaFactory;