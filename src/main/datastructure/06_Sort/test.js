const array = [];
for(let i = 0; i < 20; i++) {
    array.push(Math.round(Math.random() * 100));
}

// const BubbleSort = require('./06_BubbleSort.js');
// const bubbleSort = new BubbleSort();

// const bubbleArray = bubbleSort.sort(array);
// console.log(bubbleArray);

// const InsertionSort = require('./06_InsertionSort.js');
// const insertionSort = new InsertionSort();

// const isnertionArray = insertionSort.sort(array);
// console.log(isnertionArray);

// const SelectionSort = require('./06_SelectionSort.js');
// const selectionSort = new SelectionSort();

// const selectionArray = selectionSort.sort(array);
// console.log(selectionArray);

// const QuickSort = require('./06_QuickSort.js');
// const quickSort = new QuickSort();

// const quickArray = quickSort.sort(array);
// console.log(quickArray);

const RadixSort = require('./06_RadixSort.js');
const radixSort = new RadixSort();
const radixArray = radixSort.sortLSD(array, 3);
console.log(radixArray);