
operators :
// Arithemetic operators

// 1. + = addition 
// 2. - = substraction
// 3. * = multiplication
// 4. / = division
// 5. % = modulus 

console.log(4+3)

x = 39
y = 65
z =x+y
console.log(z) // addition

console.log(8970-42567)
console.log(75548*895534)
console.log(67/87)
console.log(10%1)

x = 1
x++  //x=x+1
console.log(x)

x = 10
x--  //x=x-1
console.log(x)

// 2. comparision : return true/false

// = is not used for comparision purpose
// = Assigning the value to the variable

console.log(2==2) //true

console.log(2=="2") //true

console.log(2==="2") // false

// == will compare the values but not a datatypes
// === will compare both value and datatypes

console.log(2>99) //false
console.log(2>1)  //true
console.log(2>2)  //false
console.log(2>=2) //true
console.log(2 != 6) //true
console.log(2 != 2) //false

// Logical oprators :

// AND = &&

// x   y   Result
// 0   0    0
// 0   1    0
// 1   0    0
// 1   1    1

console.log(2==2 && (9>6)) //true
console.log(2==="2" && (2>1)) //false

// OR = ||

// x   y   Result
// 0   0    0
// 0   1    1
// 1   0    1
// 1   1    1

console.log(2==2 || (9>6)) //true

console.log(2=="2" || (9>6)) //true

console.log(2==2 || (9<6)) //true

console.log(2===2 || (9>6)) //true

console.log(2==="2" || (9>6)) //true

console.log(2==="8" || (9>6)) //true

console.log(2==="2" || (4>6)) //true

console.log(2===2 || (9<6)) //true

// NOT :

// x   y
// 1   0
// 0   1

console.log (!(2==2)) 

// Assignment operatores :

// = 
// +=
// -+
// *=
// /=

x = 20

y = 8

x = y

console.log(x)

x = 7
x+=3 //x=x+3

console.log(x)

// turnarry operator :


x = "fareedha"
y = "ruhied"
z = 2==="2" ? x:y 
console.log(z)

workers = 4>7 ? 2:1
console.log(workers)  // it will take 2nd value is "1"

workers = 9>7 ? 2:1
console.log(workers)  // it will take 1st value is "2"

price1 = 420

price2 = 80

total = 500

//console.log(total)

console.log(price1+price2 == total)

// house buying 

buying = true

statusofhouse = buying ? "buyied" : "process"
console.log(statusofhouse)
//await expect("buyied").to.be(statusofhouse)


buying = false 

statusofhouse = buying ? "buyied" : "process"
console.log(statusofhouse) 

k = 4+2 // 6

stu ="fareedha"+"M"
console.log(stu)

console.log("fareedha"+"M")  //fareedhaM

console.log("20"+"M") //20M

console.log("56"+"54") //5654

console.log(40+"10") //4010

console.log(60+40+30+"67"+40+50)  //130674050

console.log("40"+60+60) 

console.log(30+"67"+40+50) 

console.log(30+"67"+40+"50") 


