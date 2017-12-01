/**
 * Simple Observer implementation
 * 
 */
const WaiterSubject = (function () {
    _listeners = [];

    const subscribe = (callback) => {
        _listeners.push(callback);
    }

    const emit = (pizza) => {
        _listeners.forEach(listener => listener(pizza));
    }

    const unsubscribe = (callback) => {
        _listeners = _listeners.filter(listener => listener != callback)
    }

    return {
        subscribe, unsubscribe, emit
    }
});


module.exports = example = () => {
    const waiter = new WaiterSubject();

    const narratorVoice = (pizza) => console.log(`\n==== Waiter shouts: ${pizza.name.toUpperCase()}!! ====`)
    const johnClientCallback = (pizza) => console.log(`Hmm, is it my ${pizza.name}?`);
    const annaClientCallback = (pizza) => console.log(`Oh, looks like mine ${pizza.name}`);
    const andrewClientCallback = (pizza) => console.log(`Daamn, I hope this ${pizza.name} is mine`);

    waiter.subscribe(narratorVoice);
    waiter.subscribe(johnClientCallback);
    waiter.subscribe(annaClientCallback);
    waiter.subscribe(andrewClientCallback);

    waiter.emit({
        name: 'pepperoni'
    });

    // Andrew got his pizza, he's no longer listening
    waiter.unsubscribe(andrewClientCallback);

    waiter.emit({
        name: 'hawaiian'
    });

    // John and Anna got their pizza, or just decided to not listen to waiter
    //  they're unsubscribing
    waiter.unsubscribe(johnClientCallback);
    waiter.unsubscribe(annaClientCallback);
    
    waiter.emit({
        name: 'seafood pizza'
    });

    // now only narrator listens to the waiter.
    // poor waiter
}