console.log('============ 1-module-es5.js');
{
    const pizzaHouse = require('./1-module-es5');
    
    // one pizza house instance
    const ph1 = pizzaHouse;
    ph1.addCustomer({name: 'John', surname: 'Doe'});
    ph1.addCustomer({name: 'Mery', surname: 'Doe'});
    console.log("ph1.customers: ", ph1.getCustomers(), '\n');
    
    // another pizza house instance with own state
    const ph2 = pizzaHouse;
    ph2.addCustomer({name: 'Max', surname: 'Undefined'});
    console.log("ph2.customers: ", ph2.getCustomers(), '\n');
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