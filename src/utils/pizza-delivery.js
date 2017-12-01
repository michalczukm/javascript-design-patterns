const onSideDelivery = (pizzaSet) => {
    const shopList = pizzaSet.map(pizza => pizza.ingredients)
        .reduce((acc, curr) => acc.concat(curr), []);

    return `Andrewww, go to the grosery and buy ${shopList}`;
};

const externalProviderDelivery = (pizzaSet) =>
    `Andrewwww, we have a order. Please call Anna's restaurant and order ${pizzaSet.map(pizza => pizza.name)}`;

const internetDelivery = (pizzaSet) => pizzaSet.map(pizza => pizza.name).reduce((acc, curr) => acc + ' ' + curr).split('')
    .map((char) => '00'.concat(char.charCodeAt(0).toString(2)).slice(-8))
    .join(' ');

    
module.exports = {
    onSideDelivery, externalProviderDelivery, internetDelivery
}