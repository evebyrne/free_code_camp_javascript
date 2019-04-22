function sumPrimes(num) {
  var ans = 0
  var p = 2
  while(p<=num){
    if(isPrime(p)){
       ans+= p
    }
    p+=1
  }
  console.log(ans)
  return ans;
}

sumPrimes(977);

function isPrime(num){
  for(let i=2;i<num;i++){
    if(num%i==0){
      return false
    }
  } 
  return true
}