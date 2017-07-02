class BubbleSort {
    sort(array) {
        if (!Array.isArray(array)) {
            console.log('Arguments does not array');
            return;
        }
        let count = 0;
        for (let i = 0; i < array.length - 1; i++) {
            count++;
            for(let j = 0; j < array.length - 1 - i; j++) {
                if (array[j] > array[j+1]) {
                    count++;
                    this.swap(array, j, j+1);
                }
            }
        }

        console.log(count);

        return array;
    }

    swap(array, first, second) {
        let temp = array[first];
        array[first] = array[second];
        array[second] = temp;
    }
}

module.exports = BubbleSort;