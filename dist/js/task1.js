"use strict";

var task1Button = document.getElementById('task1_button');
var task1Input = document.getElementById('task1_input');
task1Button.addEventListener("click", function () {
  var str = task1Input.value;
  document.querySelector("#maxOutput").innerHTML = findMax(convertToArray(str));
  document.querySelector("#minOutput").innerHTML = findMin(convertToArray(str));
  document.querySelector("#medianOutput").innerHTML = findMedian(convertToArray(str));
});
function convertToArray(str) {
  return str.split(' ').map(Number);
}
function findMax(params) {
  var max = params[0];
  for (var i = 1; i < params.length; i++) {
    if (params[i] > max) {
      max = params[i];
    }
  }
  return max;
}
function findMin(params) {
  var min = params[0];
  for (var i = 1; i < params.length; i++) {
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
  return params.length % 2 ? params[half] : (params[half - 1] + params[half]) / 2.0;
}
var task2Button = document.getElementById('task2_button');
var task2Input = document.getElementById('task2_input');
task2Button.addEventListener("click", function () {
  var str = task2Input.value;
  var array = convertToArray(str);
  var sequenceArray = findLongestIncreasingSequence(array);
  document.querySelector("#sequenceOutput").innerHTML = "[".concat(sequenceArray.join(", "), "]");
});
function findLongestIncreasingSequence(array) {
  var seqArray = [];
  var longestArray = [];
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
var task3Button = document.getElementById('task3_button');
var task3InputText = document.getElementById('task3_input');
var task3InputSize = document.getElementById('inputStringSize');
var task3InputCount = document.getElementById('inputStringCount');
var task3Select = document.getElementById('selectWrap');
task3Button.addEventListener("click", function () {
  var text = task3InputText.value;
  var inputSize = task3InputSize.value;
  var inputCount = task3InputCount.value;
  var select = task3Select.selectedIndex;
  var formattedString = formatText(text, inputSize, inputCount, select);
  document.querySelector("#task3_output").innerHTML = formattedString;
});
function formatText(text, maxStringSize, maxStringCount, selectedChoice) {
  var formattedText = '';
  var currentStringCount = 0;
  var currentStringSize = 0;
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
        } else if (text[i] == ' ') {
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
        } else if (text[i] == '.') {
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
var task4Button = document.getElementById('task4_button');
var task4InputNumber1 = document.getElementById('task4_input-first');
var task4InputNumber2 = document.getElementById('task4_input-second');
var task4Select = document.getElementById('selectOperation');
task4Button.addEventListener("click", function () {
  var number1 = task4InputNumber1.value;
  var number2 = task4InputNumber2.value;
  var select = task4Select.selectedIndex;
  switch (select) {
    case 0:
      document.querySelector("#task4_operationOutput").innerHTML = objOperation.add(number1, number2);
      break;
    case 1:
      document.querySelector("#task4_operationOutput").innerHTML = objOperation.subtract(number1, number2);
      break;
    case 2:
      document.querySelector("#task4_operationOutput").innerHTML = objOperation.multiply(number1, number2);
      break;
    case 3:
      document.querySelector("#task4_operationOutput").innerHTML = objOperation.divide(number1, number2);
      break;
  }
});
var objOperation = {
  add: add,
  subtract: subtract,
  multiply: multiply,
  divide: divide
};
objOperation.add = add;
objOperation.subtract = subtract;
objOperation.multiply = multiply;
objOperation.divide = divide;
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