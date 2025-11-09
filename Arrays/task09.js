const arr = [1,3,2,4];

for (let i = 0; i < arr.length;i++){
  if(arr[i + 1] === undefined) break;
  if((arr[i] <= arr [i + 1])){
    continue;
  }else { 
    console.log(`sorry bro`);
    process.stdout.write("sorry bro");
    process.exit();
  }
}
console.log(`zigZag`);