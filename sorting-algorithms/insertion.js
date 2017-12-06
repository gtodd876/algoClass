/*
INSERTION SORT

*** Description

Iterate over array and grow a sorted array behind current element.

For each position, compare value of element with previous elements and swap positions if previous element is larger.

example:
[ 3 4 5|1 2 6 ]
 sorted|unsorted
swaps:
[ 3 4 1 5|2 6 ]
[ 3 1 4 5|2 6 ]
[ 1 3 4 5|2 6 ]
now repeat for next unsorted element

*** Exercises

- Implement insertion sort for array of numbers
- Identify time complexity

- Modify function to take comparator function. specify default if not provided (check out native Array.sort comparator function for reference)
- Use your comparator function to verify that your sort is stable by taking input: [{value: 15}, {value: 10, order: 1}, {value: 10, order: 2}]

*** Extra credit
- Implement shell sort, a generalization of insertion sort
(https://en.wikipedia.org/wiki/Shellsort)

*/
//1st attempt
const insertionSort = (arr) => {
  var sortedArr = arr.splice(0, 1);
  for(var i = 0; arr.length > 0; i++) {
    var element = arr.splice(0, 1);
    for(var k = 0; k < sortedArr.length; k++) {
      if (element[0] > sortedArr[sortedArr.length-1]) {
         sortedArr.push(element[0]);
         break;
      }
      if (element[0] < sortedArr[k]) {
         sortedArr.splice(k, 0, element[0]); 
         break;
      }
    } 
  }
console.log(sortedArr);
}
insertionSort([8, 5, 3, 29, 1, 9]);
