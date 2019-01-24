//simpleGeneric
function echo(data) {
    return data;
}
//better generic way
function betterEcho(data) {
    return data;
}
console.log(betterEcho("Max"));
console.log(betterEcho(5));
console.log(betterEcho({ nombre: "guillermo", edad: 36 }));
// built-in generics
var testResultsx = [1, 2, 3,];
testResultsx.push(552);
console.log(testResultsx);
//arrays
function printAll(args) {
    args.forEach(function (elemesnt) { return console.log(elemesnt); });
}
printAll([4, 5, 8, 9, 5]);
//generic types
var echo2 = betterEcho;
console.log(echo2("hola"));
//generic clas 
var SimpleMath = /** @class */ (function () {
    function SimpleMath() {
    }
    SimpleMath.prototype.calculate = function () {
        return +this.baseValue * +this.multiplyValue;
    };
    return SimpleMath;
}());
var simpleMath = new SimpleMath();
simpleMath.baseValue = "10";
simpleMath.multiplyValue = 5;
console.log(simpleMath.calculate());
