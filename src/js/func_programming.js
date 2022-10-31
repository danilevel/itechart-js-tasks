
// function F(G, ...args) {

// }


function sum(a, b, c) {
    return a + b + c;
}

const curry = (fn) => {
    const curried = (...args) => {
        if (args.length >= fn.length) {
            return fn(...args);
        } else {
            return (...restArgs) => curried(...args, ...restArgs);
        }
    }

    return curried;
}

const temp = curry(sum);
console.log(temp(1,2)(3));