/*
SELECTION SORT

*** Description

Iterate over array and grow a sorted array behind current element.

For each position, find the smallest element in unsorted subarray starting at that position, and swap elements so that smallest element is at the beginning of unsorted subarray.

example:
[ 1 2 3|9 5 7 4 ]
 sorted|unsorted
smallest element in unsorted subarray is 4
swap with element at beggining of unsorted subarray
sorted portion has now grown:
[ 1 2 3 4|5 7 9 ]

*** Exercises

- Implement selection sort
- Identify time complexity

Stable Variant
- Implement as a stable sort - rather than swapping, the minimum value is inserted into the first position and all other items are shifted one to the right. How does this impact performance?
- Modify function to take comparator function. specify default if not provided (check out native Array.sort comparator function for reference)
- Use your comparator function to verify that your sort is stable by taking input: [{value: 15}, {value: 10, order: 1}, {value: 10, order: 2}]

- Implement selection sort for a linked list (you can use your data structure implemention from earlier in the course). How does this impact performance and stability?

*/
//1st attempt
const selectionSort = arr => {
  var sortedArr = [];
  while (arr.length > 0) {
    var smallestNum = arr[0];
    var index = 0;
    for (var i = 1; i < arr.length; i++) {
      if (arr[i] < smallestNum) {
        smallestNum = arr[i];
        index = i;
      }
    }
    sortedArr.push(smallestNum);
    arr.splice(index, 1); 

  }
  console.log(sortedArr);
}

selectionSort([4, 7, 1, 16, 9, 2]);
