function greet(person) {
    console.log("Hello " + person.firstname);
}
function changeName(person) {
    person.firstname = "Anna";
}
var persona = {
    firstname: "Max",
    age: 36,
    mhobbies: ["123", "222"],
    greet: function (lastName) {
        console.log("Hi my name is: " + this.firstname + " " + lastName);
    }
};
console.log(persona);
//ESTO SE LLAMA UN OBJECT LITERAL 
//greet({firstname:"Guillermo", age:78});
console.log(persona);
changeName(persona);
greet(persona);
persona.greet("LastNam,eee");
console.log(persona);
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.greet = function (lastName) {
        console.log("Hi my name is: " + this.firstname + " " + lastName);
    };
    return Person;
}());
var myPerson = new Person();
myPerson.firstname = "OsitoPanda";
myPerson.lastname = "RojoMal";
console.log(myPerson);
greet(myPerson);
myPerson.greet("Rojo");
var myDoubleFunction;
myDoubleFunction = function (value1, value2, x) {
    return (value1 + value2) * x;
};
console.log(myDoubleFunction(2, 3, 5));
var oldPerson = {
    age: 27,
    firstname: "Guillermo",
    greet: function (lastname) {
        console.log("A la mierda todos!");
    }
};
console.log(oldPerson);
