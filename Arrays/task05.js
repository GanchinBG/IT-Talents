let arrayOne = [2, 34, 5];
let arrayTwo = [2, 43, 5];
let equal = true;


if(arrayOne.length === arrayTwo.length){
  for(let i = 0; i < arrayOne.length; i++){
    if(arrayOne[i] !== arrayTwo[i]){
      equal = false;
      break;
    }
  }
    if(equal){
      console.log(`Arrays are equals`);
    }else {
      console.log(`Arrays are not equals`);
    }
  console.log(`Arrays length is equal`);
}else {
  console.log(`Arrays are not equals`);
  console.log(`Arrays length is not equal`);

}