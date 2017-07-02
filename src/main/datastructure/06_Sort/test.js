const BubbleSort = require('./06_BubbleSort.js');

const bubbleSort = new BubbleSort();

const array = [7, 4, 11, 9, 2];
const sortArray = bubbleSort.sort(array);
console.log(sortArray);