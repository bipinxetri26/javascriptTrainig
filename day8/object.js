// const Person ={
//     name:"Harilal",
//     class:13,
//     age:23,
//     skills:["singing", "dancing", "coding", "teaching"]
// }

// Person.skills.forEach((skill)=>{   
//     console.log(skill)
// })
// // console.log(Person.name)
// // console.log(Person.class)
// console.log(Person.skills)

//make object named "student" which has keys name, address, roll, hobbies(in array), firends(array),rank,gender

// const Student={
//     Name:"Bipin Basnet",
//     RollNo:13,
//     Rank:1,
//     Gender:"Male",
//     Address:"Tilottama-03",
//     Hobbies:["Gamming","Cooking","Travelling"],
//     Friends:["Bibek","Sujal","Amrit","Pratik"]
// }
// console.log(Student.Name)
// console.log(Student.RollNo)
// console.log(Student.Gender)
// console.log(Student.Rank)
// console.log(Student.Address)

// Student.Hobbies.forEach((hobby)=>{
//     console.log(hobby)
// })
// Student.Friends.forEach((frn)=>{
//     console.log(frn)
// })


//nested object

const student={
    name:"sushant",
    address:"sunwal",
    friends:[
        {
            name:"hari",
            address:"ktm"
        },
        {
            name: "gopal",
            address: "butwal"
        }
    ]
}

console.log(student.friends[0].name)
console.log(student.friends[0].address)
console.log(student.friends[1].name)
console.log(student.friends[1].address)

// console.log(student.friends.at(1))