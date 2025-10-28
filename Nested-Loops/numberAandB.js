let numberOne = 1;
let numberTwo = 107;
let sum = 0;
let print = "";
let numberPow = "";
for (let i = numberOne; Math.pow(i,2) <= numberTwo;i++){
  
  if (Math.pow(i,2) % 3 !== 0){
      print += i + ",";
      numberPow += "," + Math.pow(i,2);
      
      
  }
  
}

console.log(numberPow)  ;
console.log(print);