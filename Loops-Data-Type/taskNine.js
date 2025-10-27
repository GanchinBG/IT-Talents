let date = 10;
let month = 7;
let year = 2020;
let index = 1;
let days = 0;

while(index < month){
  if(index == 1){
    days += 31;
  }else if(index == 2){
    days += (year % 4 === 0 &&(year % 100 !== 0 || year % 400 === 0))? 29 : 28;
  }else if(index == 3){
    days += 31;
  }else if(index == 4){
    days += 30;
  }else if(index == 5){
    days += 31;
  }else if(index == 6){
    days += 30;
  }else if(index == 7){
    days += 31;
  }else if(index == 8){
    days += 31;
  }else if(index == 9){
    days += 30;
  }else if(index == 10){
    days += 31;
  }else if(index == 11){
    days += 30;
  }else if(index == 12){
    days += 31;
  }
  index++;
}
days += date;
console.log(days);