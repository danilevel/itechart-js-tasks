
// let compose = function(...args){
//     return function(...args)=>{

//     }
// }



// task-2

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
console.log(temp(1, 2)(3));

// task-3

// let F = (arr, function(func, result){
//     var i = 0;
//     if (arguments.length < 2) {
//         i = 1;
//         result = arr[0];
//     }
//     for (; i < arr.length; i++) {
//         result = func(result, arr[i], i, arr);
//     }
//     return result;
// })
//console.log(F(array));

array = [1, 2, 3, 4];

Array.prototype.F = function (func, result) {
    var i = 0;
    if (arguments.length < 2) {
        i = 1;
        result = this[0];
    }
    for (; i < this.length; i++) {
        result = func(result, this[i], i, this);
    }
    return result;
};

console.log(array.F(sum));

//task-4

const unfold = (func, initState) =>
    func((value, nextState) => [value, ...unfold(func, nextState)]
        , () => []
        , initState
    )

const fib = (n = 0) =>
    unfold((next, done, [n, a, b]) =>
        n < 0 ?
            done() :
            next(a, [n - 1, b, a + b])
        , [n, 0, 1]
    )

console.log(fib(7));