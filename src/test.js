console.log('============ 1-module-es5.js');
{
    const pizzaHouse = () => require('./1-module-es5');
    
    // one pizza house instance
    const ph1 = pizzaHouse();
    ph1.addCustomer({name: 'John', surname: 'Doe'});
    ph1.addCustomer({name: 'Mery', surname: 'Doe'});
    console.log('ph1.customers: ', ph1.getCustomers(), '\n');
    
    // another pizza house instance with own state
    const ph2 = pizzaHouse();
    ph2.addCustomer({name: 'Max', surname: 'Undefined'});
    console.log('ph2.customers: ', ph2.getCustomers(), '\n');
}



console.log('============ 2-class-es6.js');
{
    const PizzaHouse = require('./2-class-es6');

    // one pizza house instance
    const ph1 = new PizzaHouse();
    ph1.addCustomer({name: 'John', surname: 'Doe'});
    ph1.addCustomer({name: 'Mery', surname: 'Doe'});
    console.log("ph1.customers: ", ph1.getCustomers());

    // another pizza house instance with own state
    const ph2 = new PizzaHouse();
    ph2.addCustomer({name: 'Max', surname: 'Undefined'});
    console.log("ph2.customers: ", ph2.getCustomers(), '\n');
}



console.log('============ 3-factory.js');
{
    const pizzaFactory = require('./3-factory');

    const pizza = pizzaFactory.create('hawaiian');
    console.log('eat pizza with:', pizza.ingredients, '\n');
}



console.log('============ 3-another-factory.js');
{
    const pizzaFactory = require('./3-another-factory');

    const pizzaResult = pizzaFactory.create('hawaiian');
    console.log('eat pizza with:', pizzaResult.value.ingredients, '\n');

    const noPizza = pizzaFactory.create('seafood pizza');
    console.log(`
        me: you serve nice pizza with seafood, right?
        waiter: ${noPizza.isSuccess}\n
    `);
}



console.log('============ 4-strategy.js');
{
    const orderService = require('./4-strategy');

    orderService.placeOrder(['hawaiian'], 'on side');
    orderService.placeOrder(['hawaiian', 'pepperoni'], 'external');
    orderService.placeOrder(['hawaiian'], 'internet');    

    console.log('\n');
}



console.log('============ 5-func-composition.js');
{
    const example = require('./5-func-composition');

    console.log(example(), '\n');
}



console.log('============ 6-pure-function.js');
{
    const pizzaHouse = require('./6-pure-function');

    console.log(pizzaHouse.validateCustomersBase(), '\n');
}



console.log('============ 7-pub-sub.js');
{
    const example = require('./7-pub-sub');
    
    example();
}
