let matrix = [
  [1, 2, 3, 14, 15],
  [4, 5, 6, 7, 12],
  [8, 9, 10 , 11, 13]
];

let currentSum = 0;
let maxSum = 0;

for(let i = 0; i < matrix.length - 1;i++){
  for(let j = 0; j < matrix[i].length - 1;j++){
     currentSum =
      matrix[i][j] +
      matrix[i][j + 1] +
      matrix[i + 1][j] +
      matrix[i + 1][j + 1];

      if (currentSum > maxSum) maxSum = currentSum;
  }
}
console.log(maxSum);