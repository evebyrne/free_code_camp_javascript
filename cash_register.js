var dict = {
  "PENNY" : 0.01,
  "NICKEL" : 0.05,
  "DIME" : 0.1,
  "QUARTER" : 0.25,
  "ONE" : 1,
  "FIVE" : 5,
  "TEN" : 10,
  "TWENTY" : 20,
  "ONE HUNDRED" : 100
}

function checkCashRegister(price, cash, cid) {
  var change_needed = cash-price;
  var change = [];
  console.log("change needed: "+change_needed)
  console.log("drawer: "+cid)
  console.log(dict)
  var rem = 0
  var keys = Object.keys(dict)
  var i =keys.length-1
  while(i>=0){
    console.log(keys[i])
    rem = change_needed/dict[keys[i]]
    console.log("rem: " +rem)
    if(~~rem>0){
      for(let j=0;j<cid.length;j++){
        if(cid[j][0]==keys[i]){
          console.log("av: "+ cid[j][1])
          console.log(cid[j][1]-(rem*dict[keys[i]]))
          if(cid[j][1]-(rem*dict[keys[i]])<0){
            change.push([keys[i], rem*dict[keys[i]]])
            console.log("change: "+change)
            if(change_needed-rem*dict[keys[i]]==0){
              return {status: "OPEN", change: change}
            }
          }
        }
      }
    }
    i=i-1
  }
  return change;
}
 

 
console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
