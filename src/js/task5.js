export const funcs = {
    Sorter
}

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