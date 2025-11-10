let arr = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16]
];
let result = "";
for ( let i = 0; i < arr.length; i ++){
   result += " " + arr[i][i];
  
  }
  console.log(result);