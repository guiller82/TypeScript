interface NamedPerson {
firstname:string;
age?:number;
[propName:string]:any;

greet(lastName:string):void;

}
 

function greet (person:NamedPerson) {
console.log ("Hello " +  person.firstname);
}


function changeName (person:NamedPerson){
    person.firstname = "Anna";
}

 
const persona:NamedPerson = {
    firstname: "Max",
    age : 36,
    mhobbies:["123","222"],
    greet(lastName:string){
        console.log("Hi my name is: " + this.firstname + " " + lastName)
    }

}

console.log (persona);

//ESTO SE LLAMA UN OBJECT LITERAL 
//greet({firstname:"Guillermo", age:78});
console.log (persona);
changeName(persona);
greet(persona);
persona.greet("LastNam,eee");
console.log (persona);


class Person implements NamedPerson {
    firstname:string;
    lastname:string;
    greet(lastName:string){
    console.log("Hi my name is: " + this.firstname + " " + lastName)
}
}

const myPerson = new Person();
myPerson.firstname = "OsitoPanda";
myPerson.lastname="RojoMal";

console.log (myPerson);

greet(myPerson);
myPerson.greet ("Rojo");

// funcion types

interface DoubleValueFunc {
    (nmber1:number, number2:number, number3?:number):number
}

let myDoubleFunction: DoubleValueFunc;
myDoubleFunction = function(value1:number, value2:number, x:number){
    return (value1 + value2)*x;

}
 
console.log (myDoubleFunction(2,3,5));


//interface inheritance
interface AgedPerson extends NamedPerson {
    age:number;
}


const oldPerson:AgedPerson = {
age:27,
firstname:"Guillermo",
greet (lastname:string){
    console.log("A la mierda todos!");
}

} ;

console.log (oldPerson);