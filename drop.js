function dropElements(arr, func) {
  let i = 0
  while(!func(arr[i])&&i<arr.length){
    console.log(func(arr[i]))
    i+=1
  }
  return arr.slice(i,arr.length);
}

console.log(dropElements([1,2,3,7,4], function(n) {return n>3; }));
