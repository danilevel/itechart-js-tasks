const task1Button = document.getElementById('task1_button');
const task1Input = document.getElementById('task1_input');

task1Button.addEventListener("click", () => {
    var str = task1Input.value;
    document.querySelector("#maxOutput").innerHTML = findMax(convertToArray(str));
    document.querySelector("#minOutput").innerHTML = findMin(convertToArray(str));
    document.querySelector("#medianOutput").innerHTML = findMedian(convertToArray(str));
})


function convertToArray(str) {
    return str.split(' ').map(Number);
}

function findMax(params) {
    let max = params[0];
    for (let i = 1; i < params.length; i++) {
        if (params[i] > max) {
            max = params[i];
        }
    }
    return max;
}

function findMin(params) {
    let min = params[0];
    for (let i = 1; i < params.length; i++) {
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
    const array = convertToArray(str);
    const sequenceArray = findLongestIncreasingSequence(array);
    document.querySelector("#sequenceOutput").innerHTML = `[${sequenceArray.join(", ")}]`;

})

function findLongestIncreasingSequence(array) {
    let seqArray = [];
    let longestArray = [];

    for (var i = 1; i < array.length + 1; i++) {
        if (array[i] >= array[i - 1]) {
            seqArray.push(array[i - 1]);
        } else {
            seqArray.push(array[i - 1]);
            if (seqArray.length > longestArray.length) {
                longestArray = seqArray;
                seqArray = [];
            }
        }
    }

    return longestArray.length > seqArray.length ? longestArray : seqArray;
}


const task3Button = document.getElementById('task3_button');
const task3InputText = document.getElementById('task3_input');
const task3InputSize = document.getElementById('inputStringSize');
const task3InputCount = document.getElementById('inputStringCount');
const task3Select = document.getElementById('selectWrap');

task3Button.addEventListener("click", () => {
    let text = task3InputText.value;
    let inputSize = task3InputSize.value;
    let inputCount = task3InputCount.value;
    let select = task3Select.selectedIndex;

    const formattedString = formatText(text, inputSize, inputCount, select);
    document.querySelector("#task3_output").innerHTML = formattedString;
})

let splitOptions = {
    withoutSplit: 0,
    splitBySymbol: 1,
    splitByWord: 2,
    splitBySentence: 3,
}

function formatText(text, maxStringSize, maxStringCount, selectedChoice) {
    let words = text.replace(/\s+/g, ' ').trim().split(' ');
    let result;
    switch (selectedChoice) {
        case splitOptions.withoutSplit:
            result = words.join(' ').slice(0, maxStringSize);
            break;
        case splitOptions.splitBySymbol:
            result = words.join('').substring(0, maxStringCount).split('').join('\n');
            break;
        case splitOptions.splitByWord:
            result = text.substring(0, maxStringSize).split('').join('\n');
            break;
        case splitOptions.splitBySentence:
            result = words.join(' ').split('.').join('\n');
            break;
    }
    return result;
}

const task4Button = document.getElementById('task4_button');
const task4InputNumber1 = document.getElementById('task4_input-first');
const task4InputNumber2 = document.getElementById('task4_input-second');
const task4Select = document.getElementById('selectOperation');

task4Button.addEventListener("click", () => {
    let number1 = Number(task4InputNumber1.value);
    let number2 = Number(task4InputNumber2.value);

    let select = Number(task4Select.selectedIndex);

    switch (select) {
        case 0:
            const mSum = memoizeObj.memoizeSum;
            document.querySelector("#task4_operationOutput").innerHTML = mSum(number1, number2);
            break;
        case 1:
            const mSubtract = memoizeObj.memoizeSubtract;
            document.querySelector("#task4_operationOutput").innerHTML = mSubtract(number1, number2);
            break;
        case 2:
            const mMultiply = memoizeObj.memoizeMultiply;
            document.querySelector("#task4_operationOutput").innerHTML = mMultiply(number1, number2);
            break;
        case 3:
            const mDivide = memoizeObj.memoizeDivide;
            document.querySelector("#task4_operationOutput").innerHTML = mDivide(number1, number2);
            break;
    }
})

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

function memoize(fn) {
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

let memoizeObj = { memoizeSum: null, memoizeSubtract: null, memoizeMultiply: null, memoizeDivide: null };
memoizeObj.memoizeSum = memoize(add);
memoizeObj.memoizeSubtract = memoize(subtract);
memoizeObj.memoizeMultiply = memoize(multiply);
memoizeObj.memoizeDivide = memoize(divide);

const task5Button = document.getElementById('task5_button');
const task5Input = document.getElementById('task5_input');
const task5Select = document.getElementById('selectAlgorithm');

task5Button.addEventListener("click", () => {
    let str = task5Input.value;
    let select = task5Select.selectedIndex;
    const array = convertToArray(str);
    let objSort = new Sorter();

    switch (select) {
        case 0:
            document.querySelector("#task5_output").innerHTML = `[${objSort.bubbleSort(array).join(", ")}]`;
            break;
        case 1:
            document.querySelector("#task5_output").innerHTML = `[${objSort.selectionSort(array).join(", ")}]`;
            break;
        case 2:
            document.querySelector("#task5_output").innerHTML = `[${objSort.insertionSort(array).join(", ")}]`;
            break;
    }
})

class Sorter {
    bubbleSort(array) {
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

    selectionSort(array) {
        for (var i = 0; i < array.length - 1; i++) {
            var min = i;
            for (var j = i + 1; j < array.length; j++) {
                if (array[j] < array[min]) {
                    min = j;
                }
            }
            var t = array[min];
            array[min] = array[i];
            array[i] = t;
        }
        return array;
    }

    insertionSort(array) {
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
}

const task6Button = document.getElementById('task6_button');
const task6Input = document.getElementById('task6_input');
const task6Select = document.getElementById('selectFromTo');

task6Button.addEventListener("click", () => {
    var str = task6Input.value;
    let select = task6Select.selectedIndex;

    switch (select) {
        case 0:
            document.querySelector("#task6_output").innerHTML = objConvert.convertFromBinaryToDec(str);
            break;
        case 1:
            document.querySelector("#task6_output").innerHTML = objConvert.convertFromDecimalToBin(str);
            break;
    }
})

let objConvert = { convertFromBinaryToDec, convertFromDecimalToBin };

objConvert.convertFromBinaryToDec = convertFromBinaryToDec;
objConvert.convertFromDecimalToBin = convertFromDecimalToBin;

function convertFromBinaryToDec(str) {

    return parseInt((str + '').replace(/[^01]/gi, ''), 2);
}

function convertFromDecimalToBin(number) {
    const count = 4;
    let num = number;
    let binary = (num % 2).toString();
    for (let i = 1; num > 1; i++) {
        if (i == count) {
            binary += ' ';
            i = 0;
        }
        num = parseInt(num / 2);
        binary += (num % 2);
    }

    return binary.split('').reverse().join('');
}

function sum(a, b, c) {
    return a + b + c;
}

function partialApplication(func, ...args) {
    for (let number of args) {
        if (!Number.isInteger(number)) {
            throw new Error('One of the arguments is not a number');
        }
    }
    return (...fArgs) => {
        console.log("fdsf");
        return func(...fArgs, ...args);
    }
}

console.log(partialApplication(sum(1,23,3), 2, 3));

console.log(partialApplication(sum));
