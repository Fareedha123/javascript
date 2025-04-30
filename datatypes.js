samplevariable = "10" //string

console.log(samplevariable)

console.log(typeof(samplevariable)) //number

st1 = "fareedha"
console.log(typeof(st1))

st2 = "fareedha"
console.log(typeof(st2))

st3 = "fareedha"
console.log(typeof(st3))

//number :

st4 = 12.55
console.log(typeof(st4)) // number

st4 = 1233
console.log(typeof(st4)) //number

//string :

x = "fareedha"
x = "30"
x = '40'

sentance = "wellcome 'to world'"

console.log(sentance)  // wellcome 'to world'

//console.log(typeof(sentance))

//boolean :

true / false

x = true //boolean

y = false //boolean

//undefined : we want to declare the variable but not yet be assign the any Value 


var stu
console.log(typeof(stu))

var undefined
console.log(typeof(undefined))

//null :

x = null // in js object

sampleemptyvariable = null
console.log(typeof(sampleemptyvariable)) //object

//non primitive datatypes :

  //1. arrays :    
  
   arr = [] //empty array
   arr2 = ["fare","faree","fareedha"] // array with elements
   arr3 = [2,3,4,5,6,7,]  // all the elements are same datatypes
   //homogenioue : all the elements are same datatypes
   //hetirogenioue : all the elements are different
   arr5 = [2,"fareedha","female"]

   arr =["admin","admin123"] //array
   
  // 2. objects :

   creds ={
    "username" :"Admin",
    "password" :"Admin123"
   }  //objects

   //properties of object 
  // propertyname = parpertyvalue

   car ={
    cartype : "manual",
    color : "red",
    cost : 10000
   }
   console.log(car)

//3. regular expression : it will take out the parsial value

str = "Fareedha"
expect(str).to.equal("/Fare/i")
//console.log(str)
