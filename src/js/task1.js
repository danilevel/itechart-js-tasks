
export const funcs = {
    convertToArray,
    findMax,
    findMin,
    findMedian
}

export function convertToArray(str) {
    return str.split(' ').map(Number);
}

export function findMax(params) {
    let max = params[0];
    for (let i = 1; i < params.length; i++) {
        if (params[i] > max) {
            max = params[i];
        }
    }
    return max;
}

export function findMin(params) {
    let min = params[0];
    for (let i = 1; i < params.length; i++) {
        if (params[i] < min) {
            min = params[i];
        }
    }
    return min;
}

export function findMedian(params) {
    params.sort(function (a, b) {
        return a - b;
    });

    var half = Math.floor(params.length / 2);

    return params.length % 2 ?
        params[half] :
        (params[half - 1] + params[half]) / 2.0;
}