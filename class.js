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
var PersonClase = /** @class */ (function () {
    function PersonClase(name, username) {
        this.username = username;
        this.type = "hola";
        this.name = name;
        this.age = 36;
    }
    PersonClase.prototype.printAge = function () {
        console.log(this.age);
    };
    PersonClase.prototype.setType = function (type) {
        this.type = type;
        console.log(this.type);
    };
    return PersonClase;
}());
var person = new PersonClase("Guillermo", "Osito");
console.log(person);
person.printAge();
//person.setType("ddCerote");
var Pollito = /** @class */ (function (_super) {
    __extends(Pollito, _super);
    function Pollito(username) {
        var _this = _super.call(this, "Laura", username) || this;
        //name = "victoria";
        // const guillermo =  new Guillermo();
        _this._numbereyers = 0;
        return _this;
        //this.age = 37;
    }
    Object.defineProperty(Pollito.prototype, "numbereyers", {
        set: function (value) {
            //if (value.length>3){
            this._numbereyers = value;
            //} else {
            //  this._species="Default"; 
            //}
        },
        enumerable: true,
        configurable: true
    });
    return Pollito;
}(PersonClase));
var guillermo = new Pollito("Pollito");
guillermo.numbereyers = 555;
console.log(guillermo);
//getters and setters
var Plant = /** @class */ (function () {
    function Plant() {
        this._species = "Default";
    }
    Object.defineProperty(Plant.prototype, "species", {
        get: function () {
            return this._species;
        },
        set: function (value) {
            if (value.length > 3) {
                this._species = value;
            }
            else {
                this._species = "Default";
            }
        },
        enumerable: true,
        configurable: true
    });
    return Plant;
}());
var plant = new Plant;
console.log(plant.species);
plant.species = "AffC";
console.log(plant.species);
// static properties and methoids
var Helpers = /** @class */ (function () {
    function Helpers() {
    }
    Helpers.calcCircunference = function (diameter) {
        return this.PI * diameter;
    };
    Helpers.PI = 3.145;
    return Helpers;
}());
var helkping = new Headers;
var helkping = new Headers;
console.log(2 * Helpers.PI);
console.log(Helpers.calcCircunference(5));
//abstract class
var Project = /** @class */ (function () {
    function Project() {
        this.projectName = "Default";
        this.budget = 100;
        this.cerote = 20;
    }
    Project.prototype.calcBudget = function () {
        return this.budget * 2;
    };
    return Project;
}());
var ITPorject = /** @class */ (function (_super) {
    __extends(ITPorject, _super);
    function ITPorject() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.memo = 50;
        return _this;
    }
    ITPorject.prototype.changeName = function (name) {
        this.projectName = name;
    };
    return ITPorject;
}(Project));
var newProject = new ITPorject();
console.log(newProject);
newProject.changeName("hola");
console.log(newProject);
