import { funcs as task1 } from "../src/js/task1.js";
import { funcs as task2 } from "../src/js/task2.js";
import { funcs as task3 } from "../src/js/task3.js";
import { funcs as task4 } from "../src/js/task4.js";
import { funcs as task5 } from "../src/js/task5.js";
import { funcs as task6 } from "../src/js/task6.js";
import { expect } from 'chai';

describe("Task-1", () => {
    it('conversion with correct input', () => {
        expect(task1.findMax([1, 2, 3])).to.equal(3)
    })

    it('conversion with correct input', () => {
        expect(task1.findMax([1, 3, 4, 7, 1])).to.equal(7)
    })

    it('conversion with correct input', () => {
        expect(task1.findMin([1, 3, 4, 7, 1])).to.equal(1)
    })

    it('conversion with correct input', () => {
        expect(task1.findMin([1.1, 3, 2, 6.1])).to.equal(1.1)
    })

    it('conversion with correct input', () => {
        expect(task1.findMedian([1, 2, 3, 4])).to.equal(2.5)
    })

    it('conversion with correct input', () => {
        expect(task1.findMedian([1, 2, 3, 4, 5])).to.equal(3)
    })
})

describe("Task-2", () => {
    it('conversion with correct input', () => {
        expect(task2.findLongestIncreasingSequence([1, 2, 3, 1, 2, 3, 4, 1])).to.eql([1, 2, 3, 4])
    })
    it('conversion with correct input', () => {
        expect(task2.findLongestIncreasingSequence([1, 23, 42, 1, 2, 3, 4])).to.eql([1, 2, 3, 4])
    })
})

describe("Task-3", () => {
    it('conversion with with input text', () => {
        expect(task3.formatText("some text for example", 2, 2, 0)).to.equal("so");
    })
    it('conversion with with input text', () => {
        expect(task3.formatText("some text for example", 3, 3, 1)).to.equal("som\ntex\nfor");
    })
    it('conversion with input text', () => {
        expect(task3.formatText("some text for example", 3, 3, 1)).to.equal("som\ntex\nfor");
    })
    it('conversion with input text', () => {
        expect(task3.formatText("some", 3, 4, 2)).to.equal("s\no\nm\ne");
    })
    it('conversion with input text', () => {
        expect(task3.formatText("some. text.for. example", 3, 4, 3)).to.equal("some\n text\nfor\n example");
    })
})

describe("Task-4", () => {
    it('conversion with correct input', () => {
        expect(task4.add(2, 2.3)).to.equal(4.3);
    })
    it('conversion with correct input', () => {
        expect(task4.subtract(10.31, 32.13)).to.equal(-21.82);
    })
    it('conversion with correct input', () => {
        expect(task4.multiply(12.33, 10)).to.equal(123.3);
    })
    it('conversion with correct input', () => {
        expect(task4.divide(7, 3.2)).to.equal(2.1875);
    })
    it('conversion with correct input', () => {
        expect(task4.divide(7, 3.2)).to.equal(2.1875);
    })
})

let objSort = new task5.Sorter();
describe("Task-5", () => {
    it('conversion with correct input', () => {
        expect(objSort.bubbleSort([1, 45, 2, 72, 31, 2])).to.eql([1, 2, 2, 31, 45, 72]);
    })
    it('conversion with correct input', () => {
        expect(objSort.insertionSort([1, 45, 2, 72, 31, 2])).to.eql([1, 2, 2, 31, 45, 72]);
    })
    it('conversion with correct input', () => {
        expect(objSort.selectionSort([1, 45, 2, 72, 31, 2])).to.eql([1, 2, 2, 31, 45, 72]);
    })
})

describe("Task-6", () => {
    it('conversion with correct input', () => {
        expect(task6.convertFromBinaryToDec(111011)).to.equal(59);
    })
    it('conversion with correct input', () => {
        expect(task6.convertFromDecimalToBin(59)).to.equal('11 1011');
    })
})