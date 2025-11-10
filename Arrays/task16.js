let arr = [4, 1, 1, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3];
let currentCount = 0;
let maxCount = Number.MIN_SAFE_INTEGER;

let sortedArray = arr.sort((a,b) => a - b);
console.log(sortedArray);
let currentNum = sortedArray[0];
for (let i = 0; i < sortedArray.length;i++){
 if (currentNum === sortedArray[i]) {
  currentCount++;
  if(currentCount > maxCount) maxCount = currentCount;
 }else {
  currentCount = 0;
  currentNum = sortedArray[i];
  currentCount++;
 }
}

console.log(maxCount);