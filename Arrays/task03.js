let number = 1;
let testArray = [];
let currentNumber = 0;
let index = 0;
testArray.push(number);
testArray.push(number);

while(testArray.length <= 9){
  
  currentNumber = testArray[index] + testArray[index + 1];
  testArray.push(currentNumber);
  index++;
}
console.log(testArray);