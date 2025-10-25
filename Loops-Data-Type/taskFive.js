let numOne = 4;
let numTwo = 7;
let numThree = 1;

if (numOne > numTwo && numOne > numThree){
  if (numTwo > numThree){
    console.log(numOne,numTwo,numThree);
  }else {
    console.log(numOne,numThree,numTwo);
  }
}else if(numOne < numTwo && numTwo > numThree){
  if(numOne > numThree){
    console.log(numTwo,numOne,numThree);
  }else {
    console.log(numTwo,numThree,numOne);
  }
}else if(numThree > numOne && numThree > numTwo){
  if(numOne > numTwo){
    console.log(numThree,numOne,numTwo);
  }else {
    console.log(numThree,numTwo,numOne);
  }
}