//day3: condition statement in javascript

// let a=20
// let b=30
// let c=40

//If else statement

// if(a>b && a>c){

//     console.log(a+ " a is greater")
// }

// else if(b>c){
//     console.log(b+ " b is greater")
// }

// else{
//     console.log(c+ " c is greater")
// }

//else if

//Q1: declear four varibale and find the largest/ greatest among them using if eise if statement 



// let w=6
// let x=5
// let y=4
// let z=7

// //If else statement

// if(w>x && w>y && w>z){

//     console.log(w+ " w is greater")
// }

// else if(x>y && x>z){
//     console.log(x+ " x is greater")
// }
// else if(y>z){
//     console.log(y+ " y is greater")
// }

// else{
//     console.log(z+ " z is greater")
// }


//Q2: using if else if statement, disply "your BMI [BMI value] is perfect", "your BMI is below average" or "your BMI is above average"
// const a=25

// const height=1.8
// const weigth=70
// const bmi=(weigth/(height*height))
// console.log(bmi)

// if(bmi>a){
//     console.log(bmi+ "bmi is greater")
// }
// else if(bmi>a){
//     console.log(bmi+ "bmi is smaller")
// }
// else {
//     console.log(bmi+ "bmi is perfect")
// }


//Calculate the electricity bill based on units consumed
 //up to 50 units = rs 3/unit, 51-150 = rs 5/unit, above 150 = rs 8/unit

// let unit =200;
// let bill;
// if(unit<=50){
//     bill = unit *3,
//     console.log("Your electricity bill is rs "+bill)
// }

// else if(unit>=51 && unit<=150){
//     bill= (50*3) + ((unit-50)*5),
//     console.log("Your electricity bill is rs "+bill)
// }

// else if (unit>150){
//     bill= (50*3) + (100*5) + ((unit-150)*8);
//     console.log("Your electricity bill is rs "+bill)
// }

//write a program to check the age of a person and display that category.
//conditions   below 13= child, 13-19= teenager, 20-59=adult, 60 and above= senior citizen.

let age= 40

if (age<13) {
    console.log("child");
}
else if(age>=13 && age<+19){
    console.log("teenager");
}
else if(age>19 && age<=59){
    console.log("adult");
}
else if(age>=60){
    console.log("senor citizen");
}
else{
    console.log("invalid age");
}
