let arrayOne = [2, 34, 5, 5];
let arrayTwo = [2, 43, 5];



if(arrayOne.length === arrayTwo.length){
  for(let i = 0; i < arrayOne.length; i++){
    if(arrayOne[i] !== arrayTwo[i]){
      console.log(`Arrays are not equals`);
      break;
    }else{
      console.log(`Arrays are equals`);
    }
  }
  console.log(`Arrays length is equal`);
}else {
  console.log(`Arrays are not equals`);
  console.log(`Arrays length is not equal`);

}