/**
 * Factory
 * 
 * Encapsulate all logic behind creating object - for some parameter
 * in one place.
 * 
 * Here - lets create pizza with ingredients, depending on its type.
 */
const pizzaHouse = require('./1-module-es6');

class Pizza {
    constructor(name, ...ingredients) {
        this.name = name;
        this.ingredients = [...ingredients, 'cheese'];
    }
}

class Result {
    constructor(value = null) {
        this.isSuccess = !!value;
        this.value = value;
    }

    static fail() {
        return new Result();
    }
}

const pizzaFactory = (function() {
    const create = (type) => {
        if(pizzaHouse.canMakePizza(type)) {
            switch (type) {
                case 'pepperoni':
                    return new Result(new Pizza('power pepperoni', 'pepperoni'));
                case 'hawaiian':
                    return new Result(new Pizza('ultra hawaiian', 'pineapple', 'ham'));
                default:
                    return new Result(new Pizza());
            }
        } else {
            return Result.fail();
        }
    };

    return {
        create: create
    };
})();
 

module.exports = pizzaFactory;