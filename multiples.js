function smallestCommons(arr) {
  // Sort array from greater to lowest
  // This line of code was from Adam Doyle (http://github.com/Adoyle2014)
  arr.sort(function(a, b) {
    return b - a;
  });

  // Create new array and add all values from greater to smaller from the
  // original array.
  var newArr = [];
  for (var i = arr[0]; i >= arr[1]; i--) {
    newArr.push(i);
  }
  console.log("newArr: "+newArr)
  // Variables needed declared outside the loops.
  var quot = 0;
  var loop = 1;
  var n;

  // Run code while n is not the same as the array length.
  do {
    quot = newArr[0] * loop * newArr[1];
    console.log("loop: "+loop)
    console.log("quot: "+quot)
    for (n = 2; n < newArr.length; n++) {
      if (quot % newArr[n] !== 0) {
        console.log("breaking")
        break;
      }
    }
    console.log("n: "+n)
    loop++;
  } while (n !== newArr.length);

  return quot;
}

console.log(smallestCommons([2,10]))