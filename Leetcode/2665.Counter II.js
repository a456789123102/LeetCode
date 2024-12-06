var createCounter = function(init) {
    const oldInit = init
    function increment(){
        return ++init;
    }
    
    function reset(){
        return init = oldInit;
    }
    function decrement(){
        return --init ;
    }
    return{increment,reset,decrement}
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
const counter = createCounter(5)
console.log(counter.increment())
console.log(counter.increment())
console.log(counter.reset())
console.log(counter.decrement())