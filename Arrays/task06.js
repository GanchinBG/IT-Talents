const testArray = [2, 1, 1, 2, 3, 3, 2, 2, 2, 1];
let result = [];
let currentArray = [];

for (let i = 0; i < testArray.length;i++){
  if(testArray[i] === testArray[i - 1]){
    currentArray.push(testArray[i]);
  }else {
    if(currentArray.length > result.length){
      result = currentArray;
    }
    currentArray = [testArray[i]];
  }
  
}
if(currentArray.length > result.length){
      result = currentArray;
    }
console.log(result);

