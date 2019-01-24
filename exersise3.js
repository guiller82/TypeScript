// Exercise 1 - How was your TypeScript Class?
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var CarClass = /** @class */ (function () {
    function CarClass(name, acceleration) {
        this.acceleration = acceleration;
        this.name = name;
    }
    CarClass.prototype.hank = function () {
        console.log("Toooooooooot!");
    };
    CarClass.prototype.speed = function (speed) {
        return speed = this.acceleration = this.acceleration + speed;
    };
    return CarClass;
}());
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
var figure = /** @class */ (function () {
    function figure() {
        this.width = 0;
        this.length = 0;
    }
    return figure;
}());
var rectangle = /** @class */ (function (_super) {
    __extends(rectangle, _super);
    function rectangle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    rectangle.prototype.calcSize = function (width, length) {
        this.length = length;
        this.width = width;
        return length * width;
    };
    return rectangle;
}(figure));
var rectangulo = new rectangle;
console.log("esp chayanne");
console.log(rectangulo.calcSize(5, 5));
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
var Person01 = /** @class */ (function () {
    function Person01() {
    }
    Object.defineProperty(Person01.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            if (value.length > 3) {
                this._firstName = value;
            }
            else {
                this._firstName = "cerote";
            }
        },
        enumerable: true,
        configurable: true
    });
    return Person01;
}());
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
