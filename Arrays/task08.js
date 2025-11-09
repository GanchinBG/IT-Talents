let arr = [-9, 8, -7];

for (let i = 0; i < arr.length;i++){
  if(arr[i] < 0) {
    continue;
  }else{
    console.log(`sorry bro`);
    process.exit();
    }
}
console.log(`all < 0`);