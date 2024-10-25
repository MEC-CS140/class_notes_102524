// let myVar;
// console.log(myVar);
// myVar = "Hello"
// console.log(myVar);
// let subject = "CS"
// let classNumber = "140"

// let contcatString = subject + classNumber
// console.log(contcatString)


// console.log("Computer " + "Science")

// let aString = "This is not a string"
//let stringEdit = aString.replace("not", "actually")
// console.log(stringEdit)

// let num1 = 100
// let num2 = 5
// let num3 = 7

// console.log(++num3);
// console.log(num3);

// console.log(--num3)

// let remainder1 = num1 % num2
// console.log(remainder1);
// let remainder2 = num2 % num1
// console.log(remainder2);

let myNum = 33
let evenRemainder = myNum % 2 // find even numbers, if 0 then even
console.log(evenRemainder);

let multipleof3 = myNum % 3
console.log(multipleof3);

// console.log(classNumber + 100);

console.log("Is this not even number?: " + (evenRemainder > 0))
console.log(2 == 2)
console.log(2 >= 2)
console.log(2 > 2)
console.log(2 != 2)
console.log("2" === 2)


let myNumV2 = 21
let multipleof5 = myNumV2 % 5

if (multipleof5 == 0) {
    alert(myNumV2 + " is a multiple of 5");
}
else {
    console.log(myNumV2 + " is not a multiple of 5");
}


 
function doalert(){

    alert("Hello from the script file")
    alert(myNumV2)
}

let countNum = 0
function countup(){
    alert(++countNum)

    if (countNum % 3 == 0 ) {
        alert("Multiple of 3")
    }
    else{
        console.log("Not mutliple of 3");
        
    }
}
