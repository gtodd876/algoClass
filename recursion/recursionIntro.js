//1. Write a function that loops through the numbers n down to 0. If you haven't done so try using a while loop to do this.
function loopNums(n) {
  while (n >= 1) {
    n -= 1;
  }
  return
}

//2. Next, try looping just like above except using recursion
function loopNums(n) {
  if (n < 1) return;
  loopNums(n-1);
}

//3.Write a function 'exponent' that takes two arguments base, and expo, uses a while loop to return the exponenet value of the base.
function exponent(base, expo) {
  var result = 1;
  while (expo > 0) {
    result *= base;
    expo--;
  }
  return result;
}

//4. Write a function 'RecursiveExponent' that takes two arguments base, and expo, recursively returns exponent value of the base.
function exponent(base, expo) {
  if (expo === 1) return base;
  return base * exponent(base, expo - 1);
}

//5. Write a function 'recursiveMultiplier' that takes two arguments, 'arr and num', and multiplies each arr value by num and returns an array of the values.
function recursiveMultiplier(arr, num) {
  var index = 0;
  var newArray = [];
  function arrMultiply(index) {
    if (index > (arr.length - 1)) return;
    newArray.push(arr[index] * num);
    arrMultiply(index + 1);
  }
  arrMultiply(index);
  return newArray;
}
//6. Write a function 'recursiveReverse' that takes an array and uses recursion to return its contents in reverse
function recursiveReverser(arr) {
  var index = arr.length - 1;
  var newArray = [];
  arrReverse(index);
  function arrReverse(index) {
    if (index < 0) return;
    newArray.push( arr[index] );
    arrReverse(index - 1); 
  }
  return newArray;
}

recursiveReverser([8,5,4,7,3]);
