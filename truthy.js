function truthCheck(collection, pre) {
  console.log(pre)
  for(let i=0;i<collection.length;i++){
    console.log(collection[i])
    console.log(collection[i][pre])
    if(collection[i][pre]){
      console.log("truthy")
    }
    else{
      return false
    }
  }
  return true;
}

console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"))