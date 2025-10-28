let number = 10;
let index = 1;
let star = "* ";
while (index !== number){

    if(index % 2 !== 0){
     let spaces = "  ".repeat((number - index) / 2);
    console.log((spaces + star.repeat(index) + spaces));
   
    }
    index++;
}