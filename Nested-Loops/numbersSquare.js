let numbers = "";

for (let i = 0; i < 10; i++){
  numbers += i;
  for(let k = 1; k < i;k++){
    numbers += k;
  }
  
}
console.log(numbers);