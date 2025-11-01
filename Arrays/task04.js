const testArray = [1];
let index = 0;
let Issemetric = true;
while(testArray.length / 2 >  index){

  if(testArray[index] !== testArray.at(-index - 1)){
    Issemetric = false;
    console.log(`They are not semetric`);
    break;
  }
  index++;
}
console.log(Issemetric ? `They are semetric` : "" );