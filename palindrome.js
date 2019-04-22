function palindrome(str) {
  // Good luck!
  var pal = ""
  str = str.toLowerCase()
  str = str.replace(/\W|_/g, "")
  for(let i=0;i<str.length;i++){
    pal = str[i]+pal
    console.log(pal)
  }
  return pal === str;
}



console.log(palindrome("0_0 (: /-\ :) 0-0"));