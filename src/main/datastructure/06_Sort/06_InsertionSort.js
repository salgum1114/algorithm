class InsertionSort {
    sort(array) {
        if (!Array.isArray(array)) {
            console.log('Arguments does not array');
            return;
        }
        for (let i = 1; i < array.length; i++) {
            let temp = array[i];
            let j = i - 1;
            while(j >= 0 && temp < array[j]) {
                array[j+1] = array[j];
                j--;
            }
            array[j+1] = temp;
        }
        return array;
    }
}

module.exports = InsertionSort;