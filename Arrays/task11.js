let matrix = [
  [1, 3, 56, 92],
  [13, 24, 45, -62],
  [47, -72, 105, 67],
  [-300, 420, 96, -3],
  [123, 23, 47, -2]
];

let biggestLine = 0;
let maxSum = 0;
for (let row = 0; row < matrix.length;row++){
  let currentSum = 0;
  for (let colm = 0; colm < matrix[row].length;colm++){
    currentSum += matrix[row][colm];
    if(currentSum > maxSum){
      maxSum = currentSum;
      biggestLine = `Line ${row} : ` + matrix[row];
    }

  }
  

}
console.log(maxSum);
  console.log(biggestLine);