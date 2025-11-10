let row = 4;
let colm = 5;
let line = "";
let num = row * colm;

for(let i = 1; i < num; i+=colm){
  for(let j = i; j < colm + i; j++){
    line += " " + j;
  }
  console.log(line); 
  line = "";
}