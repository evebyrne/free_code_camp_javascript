/*
T = 2*pi*sqrt(a^3/GM)
 */

function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  
  console.log(arr)
  console.log(arr[0].avgAlt)
  
  
  return arr.map(x=> {
    let a = earthRadius + x.avgAlt; 
    var T = 2*Math.PI*Math.sqrt(Math.pow(a,3)/GM)
    return {name: x.name, orbitalPeriod: Math.round(T)} 
  });

}

console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));

