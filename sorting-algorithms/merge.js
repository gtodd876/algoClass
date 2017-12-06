/*
MERGE SORT

*** Description

Merge sort employs a divide and conquer strategy - merge two sorted subarrays into one sorted array.

Recursive top-down approach:
Recursively break down array into two subarrays and sort them recursively. Subarrays are broken down until they have only 1 element (implying they are sorted).

Iterative bottom-up approach:
Split array into sublists of size 1, merge adjacent sublists into sorted lists, repeat until no more sublists.

*** Exercises

- Implement recursive merge sort (you might want to write a helper function to handle the merge step)
- Implement iterative merge sort
- Identify time complexity

- Modify function to take comparator function. specify default if not provided (check out native Array.sort comparator function for reference)
- Use your comparator function to verify that your sort is stable by taking input: [{value: 15}, {value: 10, order: 1}, {value: 10, order: 2}]

Optimization:
- Refactor your iterative solution to be a natural merge sort. This means that the initial subarrays are naturally occurring sorted sequences. How does this impact time complexity and adaptivity?
ex:
input array: [ 1 2 4 5 9 ]
subarrays for regular merge sort: [ [1], [2], [4], [5], [9] ]
subarrays for natural merge sort: [ [1,2], [4,5], [9] ]

*/
const mergeSort = arr => {
  
  if (arr.length <= 1) return arr;
  var middle = Math.floor(arr.length / 2);
  var leftArr = arr.slice(0, middle);
  var rightArr = arr.slice(middle, arr.length);
  return combineSorted(mergeSort(leftArr), mergeSort(rightArr)); 
  
};

const combineSorted = (leftArr, rightArr) => {
  var sortedArr = [];
  while (leftArr.length && rightArr.length) {
    if (leftArr[0] <= rightArr[0]) {
      sortedArr.push(leftArr.shift());
    } else {
      sortedArr.push(rightArr.shift());
    }
  }
  while (leftArr.length) {
    sortedArr.push(leftArr.shift());
  }
  while (rightArr.length) {
    sortedArr.push(rightArr.shift());
  }
  return sortedArr;
};

var results = mergeSort([9, 1, 6, 14, 3, 31, 2]);
console.log(results);
