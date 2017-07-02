class SelectionSort {
    sort(array) {
        if (!Array.isArray(array)) {
            console.log('Arguments does not array');
            return;
        }
        for (let i = 0; i < array.length; i++) {
            let min = i;
            for (let j = i + 1; j < array.length; j++) {
                if (array[min] > array[j]) {
                    min = j;
                }
            }
            this.swap(array, min, i);
        }

        return array;
    }

    swap(array, first, second) {
        const temp = array[first];
        array[first] = array[second];
        array[second] = temp;
    }
}

module.exports = SelectionSort;