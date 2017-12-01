/**
 * Factory
 * 
 * Encapsulate all logic behind creating object - for some parameter
 * in one place.
 * 
 * Here - lets create pizza with ingredients, depending on its type.
 */
class Pizza {
    constructor(name, ...ingredients) {
        this.name = name;
        this.ingredients = [...ingredients, 'cheese'];
    }
}

const pizzaFactory = (function() {
    const create = (type) => {
        switch (type) {
            case 'pepperoni':
                return new Pizza('power pepperoni', 'pepperoni');
            case 'hawaiian':
                return new Pizza('ultra hawaiian', 'pineapple', 'ham');
            default:
                return new Pizza();
        }
    };

    return {
        create: create
    };
})();
 

module.exports = pizzaFactory;