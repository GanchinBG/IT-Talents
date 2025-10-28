let num = 9;
for (let i = 100;i <= 999;i++){
    const str = i.toString();
    let numOne = Number(str[0]);
    let numberTwo = Number(str[1]);
    let numThree = Number(str[2]);
    
    if((numOne + numberTwo + numThree) === num){
      console.log(i);
    }
    
}