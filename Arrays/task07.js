const testArray = [1, 2, 3, 4, 5, 6];
let currentArray = [];

for(let i = 1; i < testArray.length + 1;i++){
  currentArray.push(testArray.at(-i));

}
console.log(currentArray);