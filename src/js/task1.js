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

function formatText(text, maxStringSize, maxStringCount, selectedChoice) {

    let formattedText = '';
    let currentStringCount = 0;
    let currentStringSize = 0;

    for (var i = 0; i < text.length; i++) {
        formattedText += text[i];
        currentStringSize++;
        switch (selectedChoice) {
            case 0:
                checkStringSize();
                if (checkStringCount()) {
                    return formattedText;
                }
                break;
            case 1:
                if (checkStringSize()) {
                    moveIndexToEnd(' ');
                }
                else if (text[i] == ' ') {
                    formattedText += '\n';
                }

                if (checkStringCount()) {
                    return formattedText;
                }
                break;
            case 2:
                formattedText += '\n';
                currentStringCount++;
                if (checkStringCount()) {
                    return formattedText;
                }
                
                break;
            case 3:
                if (checkStringSize()) {
                    moveIndexToEnd('.');
                }
                else if (text[i] == '.') {
                    formattedText += '\n';
                }
                if (checkStringCount()) {
                    return formattedText;
                }
                break;
        }
    }

    function checkStringSize() {
        if (currentStringSize >= maxStringSize) {
            formattedText += '\n';
            currentStringSize = 0;
            currentStringCount++;
            return true;
        }
        return false;
    }

    function checkStringCount() {
        if (currentStringCount >= maxStringCount) {
            return true;
        }
        return false;
    }

    function moveIndexToEnd(symbol) {
        for (var j = 0; j < text.length; j++) {
            if (text[i] == symbol) {
                break;
            } else {
                i++;
            }
        }
    }
    return formattedText;
}