let row = 4;
let colm = 5;
let line = "";
let num = row * colm;

for(let i = 1; i <= row; i++){
  for(let j = i; j <= num; j+= row){
    line += " " + j;
  }
  console.log(line); 
  line = "";
}
