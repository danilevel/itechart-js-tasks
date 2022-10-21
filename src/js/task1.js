const task1Button = document.getElementById('task1_button');
const task1Input = document.getElementById('task1_input');

task1Button.addEventListener("click", () => {
    var str = task1Input.value;
    document.querySelector("#maxOutput").innerHTML = findMax(convertToArray(str));
    document.querySelector("#minOutput").innerHTML = findMin(convertToArray(str));
    document.querySelector("#medianOutput").innerHTML = findMedian(convertToArray(str));
})

function convertToArray(str) {
    console.log(typeof str);
    return str.split(' ').map(Number);
}

function findMax(params) {
    let max = params[0];
    for (let i = 0; i < params.length; i++) {
        if (params[i] > max) {
            max = params[i];
        }
    }
    return max;
}

function findMin(params) {
    let min = params[0];
    for (let i = 0; i < params.length; i++) {
        if (params[i] < min) {
            min = params[i];
        }
    }
    return min;
}

function findMedian(params) {
    params.sort(function (a, b) {
        return a - b;
    });

    var half = Math.floor(params.length / 2);

    return params.length % 2 ?
        params[half] :
        (params[half - 1] + params[half]) / 2.0;
}

const task2Button = document.getElementById('task2_button');
const task2Input = document.getElementById('task2_input');

task2Button.addEventListener("click", () => {
    let str = task2Input.value;
    document.querySelector("#sequenceOutput").innerHTML = findLongestIncreasingSequence(convertToArray(str));

})

function findLongestIncreasingSequence(array) {
    let seqArray = [];
    let longestArray = [];

    for (var i = 1; i < array.length + 1; i++) {
        if (array[i] >= array[i - 1]) {
            seqArray += array[i - 1];
        } else {
            seqArray += array[i - 1];
            if (seqArray.length > longestArray.length) {
                longestArray = seqArray;
                seqArray = [];
            }
        }
    }
    return longestArray.length > seqArray.length ? longestArray : seqArray;
}