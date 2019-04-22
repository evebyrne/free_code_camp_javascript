var dict = {
  1 : 'I',
  5 : 'V',
  10 : 'X',
  50 : 'L',
  100 : 'C',
  500 : 'D',
  1000 : 'M'
}

function convertToRoman(num) {
 var keys = Object.keys(dict)
 console.log(keys)
 var ans = ""
 var remainder = num
 let i = 6
 do {
   var result = 0
   while(result==0 && i>=0){
     result = ~~(remainder/keys[i])
     console.log(keys[i])
     console.log(result)
     i = i -1
   }
   console.log(keys[i+1])
   console.log(result)
   
   if(result>3){
     console.log("need to change to subtract")
     console.log(ans[ans.length-1])
     if(ans[ans.length-1]===dict[keys[i+2]]){
       console.log("9999")
       ans = ans.slice(0,-1)
       ans = ans+dict[keys[i+1]]+dict[keys[i+3]]
     }
     else {
      ans = ans+dict[keys[i+1]]+dict[keys[i+2]]
      console.log(dict[keys[i+2]])
     }
   }
   else {
     for(let j = 0;j< result;j++){
       ans = ans + dict[keys[i+1]]
     }
   }
   console.log(ans)
   
   remainder = remainder - result*keys[i+1]
   console.log(remainder)
   
 } while(remainder > 0)
 return ans;
}

console.log(convertToRoman(8000));