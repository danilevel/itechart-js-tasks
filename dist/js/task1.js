"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
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
  var number1 = Number(task4InputNumber1.value);
  var number2 = Number(task4InputNumber2.value);
  var select = Number(task4Select.selectedIndex);
  switch (select) {
    case 0:
      var mSum = memoizeObj.memoizeSum;
      document.querySelector("#task4_operationOutput").innerHTML = mSum(number1, number2);
      break;
    case 1:
      var mSubtract = memoizeObj.memoizeSubtract;
      document.querySelector("#task4_operationOutput").innerHTML = mSubtract(number1, number2);
      break;
    case 2:
      var mMultiply = memoizeObj.memoizeMultiply;
      document.querySelector("#task4_operationOutput").innerHTML = mMultiply(number1, number2);
      break;
    case 3:
      var mDivide = memoizeObj.memoizeDivide;
      document.querySelector("#task4_operationOutput").innerHTML = mDivide(number1, number2);
      break;
  }
});
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
  var props1 = Object.getOwnPropertyNames(object1);
  var props2 = Object.getOwnPropertyNames(object2);
  if (props1.length !== props2.length) {
    return false;
  }
  for (var i = 0; i < props1.length; i += 1) {
    var prop = props1[i];
    var bothAreObjects = _typeof(object1[prop]) === 'object' && _typeof(object2[prop]) === 'object';
    if (!bothAreObjects && object1[prop] !== object2[prop] || bothAreObjects && !isEqual(object1[prop], object2[prop])) {
      return false;
    }
  }
  return true;
}
var memoize = function memoize(fn) {
  var prevProps;
  var prevResult;
  return function () {
    for (var _len = arguments.length, props = new Array(_len), _key = 0; _key < _len; _key++) {
      props[_key] = arguments[_key];
    }
    if (prevResult && prevProps && isEqual(prevProps, props)) {
      console.log("From cache");
      return prevResult;
    }
    console.log("In cache");
    prevProps = props;
    prevResult = fn.apply(void 0, props);
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
};

var memoizeObj = {
  memoizeSum: null,
  memoizeSubtract: null,
  memoizeMultiply: null,
  memoizeDivide: null
};
memoizeObj.memoizeSum = memoize(add);
memoizeObj.memoizeSubtract = memoize(subtract);
memoizeObj.memoizeMultiply = memoize(multiply);
memoizeObj.memoizeDivide = memoize(divide);
var task5Button = document.getElementById('task5_button');
var task5Input = document.getElementById('task5_input');
var task5Select = document.getElementById('selectAlgorithm');
task5Button.addEventListener("click", function () {
  var str = task5Input.value;
  var select = task5Select.selectedIndex;
  var array = convertToArray(str);
  console.log(array);
  switch (select) {
    case 0:
      document.querySelector("#task5_output").innerHTML = "[".concat(objSort.bubbleSort(array).join(", "), "]");
      break;
    case 1:
      document.querySelector("#task5_output").innerHTML = "[".concat(objSort.quickSort(array).join(", "), "]");
      break;
    case 2:
      document.querySelector("#task5_output").innerHTML = "[".concat(objSort.insertionSort(array).join(", "), "]");
      break;
  }
});
var objSort = {
  bubbleSort: bubbleSort,
  quickSort: quickSort,
  insertionSort: insertionSort
};
objSort.bubbleSort = bubbleSort;
objSort.quickSort = quickSort;
objSort.insertionSort = insertionSort;
function bubbleSort(array) {
  if (array.length <= 1) {
    return array;
  }
  for (var j = array.length - 1; j > 0; j--) {
    for (var i = 0; i < j; i++) {
      if (array[i] > array[i + 1]) {
        var temp = array[i];
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
}
;
function insertionSort(array) {
  if (array.length <= 1) {
    return array;
  }
  for (var i = 1, l = array.length; i < l; i++) {
    var current = array[i];
    var j = i;
    while (j > 0 && array[j - 1] > current) {
      array[j] = array[j - 1];
      j--;
    }
    array[j] = current;
  }
  return array;
}
var task6Button = document.getElementById('task6_button');
var task6Input = document.getElementById('task6_input');
var task6Select = document.getElementById('selectFromTo');
task6Button.addEventListener("click", function () {
  var str = task6Input.value;
  var select = task6Select.selectedIndex;
  switch (select) {
    case 0:
      document.querySelector("#task6_output").innerHTML = objConvert.convertFromBinaryToDec(str);
      break;
    case 1:
      document.querySelector("#task6_output").innerHTML = objConvert.convertFromDecimalToBin(str);
      break;
  }
});
var objConvert = {
  convertFromBinaryToDec: convertFromBinaryToDec,
  convertFromDecimalToBin: convertFromDecimalToBin
};
objConvert.convertFromBinaryToDec = convertFromBinaryToDec;
objConvert.convertFromDecimalToBin = convertFromDecimalToBin;
function convertFromBinaryToDec(str) {
  str.replace(/ /g, '');
  return parseInt((str + '').replace(/[^01]/gi, ''), 2);
}
function convertFromDecimalToBin(number) {
  var count = 4;
  var num = number;
  var binary = (num % 2).toString();
  for (var i = 1; num > 1; i++) {
    if (i == count) {
      binary += ' ';
      i = 0;
    }
    num = parseInt(num / 2);
    binary += num % 2;
  }
  return binary.split('').reverse().join('');
}