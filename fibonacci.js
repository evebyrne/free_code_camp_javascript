function sumFibs(num) {
 
  var x = 0
  var y = 1
  var ans = 0
  while(y<=num){
    console.log('loop')
    console.log("x: " +x)
    console.log("y: " +y)
    if(y%2!==0){
      ans = ans+ y
    }
    y += x
    x = y-x
    
    console.log("ans: " +ans)
  }
  return ans
}

console.log(sumFibs(75025));
