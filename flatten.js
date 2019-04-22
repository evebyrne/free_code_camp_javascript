function steamrollArray(arr) {
  var ans = []
  
  var flatten = function(arr){
    console.log(arr)
    if(!Array.isArray(arr)){
      console.log(arr)
      ans.push(arr)
    }
    else {
      arr.map(flatten)
    }
  }
  arr.map(flatten)
  return ans
}

console.log(steamrollArray([1, {}, [3, [[4]]]]));
