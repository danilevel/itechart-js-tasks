export const funcs = {
    add, 
    subtract, 
    multiply, 
    divide
}

function add(firstNum, secNum) {
    if (isNaN(firstNum) || isNaN(secNum)) {
        return 'Not a Number!';
    }
    return Number(firstNum) + Number(secNum);
}

function subtract(firstNum, secNum) {
    if (isNaN(firstNum) || isNaN(secNum)) {
        return 'Not a Number!';
    }
    return firstNum - secNum;
}

function multiply(firstNum, secNum) {
    if (isNaN(firstNum) || isNaN(secNum)) {
        return 'Not a Number!';
    }
    return firstNum * secNum;
}

function divide(firstNum, secNum) {
    if (isNaN(firstNum) || isNaN(secNum)) {
        return 'Not a Number!';
    }
    return firstNum / secNum;
}

function isEqual(object1, object2) {
    const props1 = Object.getOwnPropertyNames(object1);
    const props2 = Object.getOwnPropertyNames(object2);

    if (props1.length !== props2.length) {
        return false;
    }

    for (let i = 0; i < props1.length; i += 1) {
        const prop = props1[i];
        const bothAreObjects = typeof (object1[prop]) === 'object' && typeof (object2[prop]) === 'object';

        if ((!bothAreObjects && (object1[prop] !== object2[prop]))
            || (bothAreObjects && !isEqual(object1[prop], object2[prop]))) {
            return false;
        }
    }

    return true;
}

const memoize = (fn) => {
    let prevProps;
    let prevResult;
    return (...props) => {
        if (prevResult && prevProps && isEqual(prevProps, props)) {
            console.log("From cache");
            return prevResult;
        }

        console.log("In cache");
        prevProps = props;
        prevResult = fn(...props);
        return prevResult;
    };

    // return (...args) => {
    //     const keyCache = JSON.stringify(args);
    //     console.log(fn.values[keyCache]);
    //     if (!fn.values[keyCache]) {
    //         console.log('in cache');
    //         fn.values[keyCache] = fn(...args);
    //     }

    //     console.log(fn.values[keyCache]);
    //     return fn.values[keyCache];
    // };
}