class QuickSort {
    sort(array, left, right) {
        if (!Array.isArray(array)) {
            console.log('Arguments does not array');
            return;
        }
        let index;
        if (array.length > 1) {
            left = typeof left != "number" ? 0 : left;
            right = typeof right != "number" ? array.length - 1 : right;

            index = this.partition(array, left, right);
            if (left < index - 1) {
                this.sort(array, left, index - 1);
            }

            if (index < right) {
                this.sort(array, index, right);
            }
        }

        return array;
    }

    partition(array, left, right) {
        const pivot = array[Math.floor((right + left) / 2)];
        let i = left;
        let j = right;

        while (i <= j) {
            while (array[i] < pivot) {
                i++;
            }
            while (array[j] > pivot) {
                j--;
            }

            if (i <= j) {
                this.swap(array, i, j);
                i++;
                j--;
            }
        }

        return i;
    }

    swap(array, first, second) {
        const temp = array[first];
        array[first] = array[second];
        array[second] = temp;
    }
}

module.exports = QuickSort;