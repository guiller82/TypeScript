// Exercise 1 - Maybe use an Arrow Function?
console.log("Exercise 1 - Maybe use an Arrow Function?");
let double = (value:number):number => value * 2; 
console.log(double(10));

console.log("222222222222222222222222222");
// Exercise 2 - If only we could provide some default values...
var greet1 = function (name:string = "Guillermo") {
    if (name === undefined) { name = "Max"; }
    console.log("Hello, " + name);
};
greet1();
greet1("Anna");

console.log("333333333333333333");
// Exercise 3 - Isn't there a shorter way to get all these Values?
var numbers = [-3, 33, 38, 5];

console.log(Math.min(...numbers));
console.log(...numbers);
console.log(Math.min.apply(Math, numbers));
 
console.log("4444444444444444");
// Exercise 4 - I have to think about Exercise 3 ...
var newArray = [55, 20];
newArray.push(...numbers);
//Array.prototype.push.apply(newArray, numbers);
console.log(...newArray);
 

console.log("555555555555555");
// Exercise 5 - That's a well-constructed array.
var testResults = [3.89, 2.99, 1.38];
/*var result1 = testResults[0];
var result2 = testResults[1];
var result3 = testResults[2];
console.log(result1, result2, result3);*/



const [result1, result2, result3] = testResults;
console.log (result1, result2, result3);


 

console.log("666666666666666666");
// Exercise 6 - And a well-constructed object!
var scientist = {firstName: "Will", experience: 12};
//var firstName = scientist.firstName;
//var experience = scientist.experience;
//console.log(firstName, experience);


const {firstName, experience} = scientist;
console.log (firstName, experience);