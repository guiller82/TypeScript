var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function logged(constructorFn) {
    console.log(constructorFn);
}
var Perzon = /** @class */ (function () {
    function Perzon() {
        console.log("Hi");
    }
    Perzon = __decorate([
        logged
    ], Perzon);
    return Perzon;
}());
//factory
function logging(value) {
    return value ? logged : null;
}
var Car = /** @class */ (function () {
    function Car() {
    }
    Car = __decorate([
        logging(true)
    ], Car);
    return Car;
}());
//advanced
function printable(constructorFn) {
    constructorFn.prototype.print = function () {
        console.log(this);
    };
}
var Plaant = /** @class */ (function () {
    function Plaant() {
        this.name = "Green Plant";
        this.edad = 20;
    }
    Plaant = __decorate([
        logging(true),
        printable
    ], Plaant);
    return Plaant;
}());
var plaant = new Plaant();
plaant.print();
//this.plant.print();
//mETHOD dECORATORS
// Property decorators
function editable(value) {
    return function (target, proName, descriptor) {
        descriptor.writable = value;
        console.log(proName);
    };
}
// Property decorators example
function overwritable(value) {
    return function (target, proName) {
        var newDescriptor = {
            writable: value
        };
        return newDescriptor;
    };
}
var Proyect = /** @class */ (function () {
    function Proyect(name) {
        this.projectName = name;
    }
    Proyect.prototype.calcBudget = function () {
        console.log(1000);
    };
    __decorate([
        overwritable(true)
    ], Proyect.prototype, "projectName", void 0);
    __decorate([
        editable(false)
    ], Proyect.prototype, "calcBudget", null);
    return Proyect;
}());
var project = new Proyect("Super Project");
project.calcBudget();
project.calcBudget = function () {
    console.log(2000);
};
project.calcBudget();
console.log("--------");
console.log(project);
console.log("--------");
//Parameter Decorator
function printInfo(target, methodName, paramIndex) {
    console.log("Target:", target);
    console.log("methodName:", methodName);
    console.log("paramIndex:", paramIndex);
}
var Course = /** @class */ (function () {
    function Course(name) {
        this.name = name;
    }
    Course.prototype.printStudentName = function (mode, printAll) {
        if (printAll) {
            console.log(10000);
        }
        else {
            console.log(2000);
        }
    };
    __decorate([
        __param(1, printInfo)
    ], Course.prototype, "printStudentName", null);
    return Course;
}());
var course = new Course("Couse");
course.printStudentName("anything", true);
course.printStudentName("anything", false);
