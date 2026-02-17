//Q1. subtraction by busing function

function sub(a,b){
    return a-b 
}
console.log(sub(12,9))

//Q2. arrow function that divide 2 numbers
const div=(x,y) =>x/y;
console.log(div(20,4))


// const number = (a,b)=>{
// if(a>b){
//     console.log(a + " greater number")
// }
// else{
//     console.log(b + " greater number")
// }
// }
// number(45,55)

//Q5. arrow function that return the greatest of 2 number
const greatest = (a,b)=>(a>b?a:b)
console.log(greatest(67,89))

//Q7.  function that return the product of 3 numbers.
function threenumber(p,q,r){
    return(p*q*r)
}
console.log(threenumber(12, 2, 4))


//Q8. check the number is even or odd using arrow function
const number = (a)=>{
    if(a%2==0){
        console.log(a+ " even number")
    }
    else{
        console.log(a+ " odd number")
    }
}
number(7)



