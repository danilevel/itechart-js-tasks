export const funcs = {
    bubbleSort,
    quickSort,
    insertionSort
}

function bubbleSort(array) {
    if (array.length <= 1) {
        return array;
    }
    for (let j = array.length - 1; j > 0; j--) {
        for (let i = 0; i < j; i++) {
            if (array[i] > array[i + 1]) {
                let temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
            }
        }
    }

    return array;
}

function quickSort(array) {
    if (array.length <= 1) {
        return array;
    }
    var pivot = array[0];

    var left = [];
    var right = [];

    for (var i = 1; i < array.length; i++) {
        array[i] < pivot ? left.push(array[i]) : right.push(array[i]);
    }

    return quickSort(left).concat(pivot, quickSort(right));
};


function insertionSort(array) {
    if (array.length <= 1) {
        return array;
    }
    for (let i = 1, l = array.length; i < l; i++) {
        const current = array[i];
        let j = i;
        while (j > 0 && array[j - 1] > current) {
            array[j] = array[j - 1];
            j--;
        }
        array[j] = current;
    }
    return array;
}