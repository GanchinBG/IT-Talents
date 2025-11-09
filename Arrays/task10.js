let arr = [0,1,1,1,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,1,0];
let sortedArray =[];

for(let i = 0; i < arr.length;i++){
  if(arr[i] === 0){
    sortedArray.unshift(arr[i]);
  }else {
    sortedArray.push(arr[i]);
  }
}
console.log(sortedArray);