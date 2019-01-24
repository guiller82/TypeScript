// Exercise 1 - How was your TypeScript Class?

class CarClass {
    public name:string;
    public acceleration:number;

 constructor(name:string, acceleration:number) {
     this.acceleration = acceleration;
     this.name = name;

 }

 public hank():void {
    console.log("Toooooooooot!");
}

speed (speed:number):number {
return speed = this.acceleration = this.acceleration + speed;
}



}


var car = new CarClass("BMW", 70);
car.hank();
//console.log();
console.log(car.speed(100));




/*

function Car(name) {
    this.name = name;
    this.acceleration = 0;
 
    this.honk = function() {
        console.log("Toooooooooot!");
    };
 
    this.accelerate = function(speed) {
        this.acceleration = this.acceleration + speed;
    }
}
var car = new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);
 

*/

abstract class  figure {

    width: number;
    length: number;
    
    constructor (){
        this.width = 0;
        this.length = 0;
    }
}

    class rectangle extends figure {


        calcSize (width:number,length:number ){
            this.length = length;
            this.width = width;
            return length * width;
        }
    }

    var rectangulo = new rectangle;
    console.log("esp chayanne");
    console.log(rectangulo.calcSize(5,5));


//}

/*
// Exercise 2 - Two objects, based on each other ...
var baseObject = {
    width: 0,
    length: 0
};
var rectangle = Object.create(baseObject);
rectangle.width = 5;
rectangle.length = 2;
rectangle.calcSize = function() {
    return this.width * this.length;
};
console.log(rectangle.calcSize());
 */
// Exercise 3 - Make sure to compile to ES5 (set the target in tsconfig.json)



class Person01 {

    private _firstName:string;

get firstName (){
    return this._firstName;
}

set firstName(value:string) {
        if (value.length>3){
            this._firstName = value;
        } else {
            this._firstName="cerote"; 
        }
    }

}

var personilla = new Person01;
personilla.firstName = "Ma";
console.log(personilla.firstName);
personilla.firstName = "Marumacha";
console.log(personilla.firstName);




/*
var person = {
    _firstName: ""
};
Object.defineProperty(person, "firstName", {
    get: function () {
        return this._firstName;
    },
    set: function (value) {
        if (value.length > 3) {
            this._firstName = value;
        }
        else {
            this._firstName = "";
        }
    },
    enumerable: true,
    configurable: true
});
console.log(person.firstName);
person.firstName = "Ma";
console.log(person.firstName);
person.firstName = "Maximilian";
console.log(person.firstName);*/