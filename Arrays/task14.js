let matrix = [
  [true, false, true],
  [false, true, false],
  [false, false, false]
];

let count = 0;

  for(let i = 0; i < matrix.length - 1; i++){
    for(let j = 0; j < matrix[i].length - 1 - i ;j++){
    if(matrix[i][j] === true){
      count++;
    }
    
  }
}
console.log(`We have ${count} true's`);

