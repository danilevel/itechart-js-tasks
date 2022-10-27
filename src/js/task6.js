export const funcs = {
    convertFromBinaryToDec, 
    convertFromDecimalToBin
}

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