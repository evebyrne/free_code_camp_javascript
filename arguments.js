function addTogether() {
  console.log(arguments)
  console.log(arguments.length)
  console.log(isNaN(arguments[0]))

  if(arguments.length==2){
    if(typeof(arguments[0])=="number"&&typeof(arguments[1])=="number"){
         return arguments[0]+arguments[1]
    }
    else{
      return undefined
    }
  }
  else {
    if(arguments.length==1&&typeof(arguments[0])=="number"){
      var arg0 = arguments[0]
      return function(x){
        if(typeof(x)!=="number"){
          return undefined
        }
        else {
          console.log(x)
          console.log(arg0)
          return arg0+x
        }
      }
    }
    else{
      return "incorrect num of args"
    }
  }
}

console.log(addTogether(2,"4"));

