// var , let and const in js
// var a = 10;
// var a = 20;
// console.log(a)


// var is global scoped that can be re-declared
// let is block scoped variable that cannot be re-declared.
// let b= 20;
// let b=30;

//switch case statement in javascripts
// const day= new Date().getDay();
// // const day=7
// console.log(day);

// switch(day){
//     case 0:
//     console.log("Today is Sunday")
//     break;
//     case 1:
//     console.log("Today is Monday")
//     break;
//     case 2:
//     console.log("Today is Tuesday")
//     break;
//     case 3:
//     console.log("Today is wednesday")
//     break;
//     case 4:
//     console.log("Today is Thursday")
//     break;
//     case 5:
//     console.log("Today is Friday")
//     break;
//     case 6:
//     console.log("Today is Saturday")
//     break;
//     default:
//       console.log("wrong input (0-6)")
    
// }


const month= new Date().getMonth();
console.log(month);

switch(month){
    case 0:
    console.log("Today is January")
    break;
    case 1:
    console.log("Today is February")
    break;
    case 2:
    console.log("Today is March")
    break;
    case 3:
    console.log("Today is April")
    break;
    case 4:
    console.log("Today is may")
    break;
    case 5:
    console.log("Today is June")
    break;
    case 6:
    console.log("Today is July")
    break;
     case 7:
    console.log("Today is August")
    break;
     case 8:
    console.log("Today is September")
    break;
     case 9:
    console.log("Today is October")
    break;
     case 10:
    console.log("Today is November")
    break;
     case 11:
    console.log("Today is December")
    break;
    default:
      console.log("wrong input (0-11)")
    
}