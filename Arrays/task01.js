
let testArray = [10, 15, 9, 12, 0, -4, -3.99];

let currentNumber = Number.MAX_SAFE_INTEGER; 
for (let i = 0; i < testArray.length;i++){
  if(testArray[i] < currentNumber) currentNumber = testArray[i];
}
console.log(currentNumber);