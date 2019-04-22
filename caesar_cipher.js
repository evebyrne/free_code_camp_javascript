function rot13(str) { // LBH QVQ VG!
  var alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var ans = ""
  for(let i = 0;i<str.length;i++){
    console.log(str[i])
    let index = alpha.indexOf(str[i])
    console.log("index: " +index)
    console.log(index-13)
    if(index == -1){
      ans = ans + str[i]
    } else {
      if(index-13<0){
      console.log("adj ind: "+ (26+(index-13)))
      console.log(alpha[26+(index-13)])
      ans = ans + alpha[26+(index-13)]
    }
    else{
      console.log(alpha[index-13])
      ans = ans + alpha[index-13]
    }
    }
  }
  return ans;
}

// Change the inputs below to test
console.log(rot13("SERR PBQR PNZC"));
