
export const funcs = {
    findLongestIncreasingSequence
}

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