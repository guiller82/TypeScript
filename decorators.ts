
function logged(constructorFn: Function){

    console.log(constructorFn);
  }

@logged
class Perzon{
    constructor(){
     console.log("Hi");
 }
}


//factory

function logging(value:boolean){
    return value ? logged:null;
}

@logging(true)
class Car {


}


//advanced
function printable (constructorFn:Function) {
    constructorFn.prototype.print = function(){
        console.log(this);
    }
 }

 @logging(true)
 @printable
 class Plaant{
     name = "Green Plant";
     edad = 20;
 }
 const plaant =new Plaant();
 (<any>plaant).print();
 //this.plant.print();

 //mETHOD dECORATORS
 // Property decorators

function editable (value:boolean) {
    return function(target:any, proName:string, descriptor:PropertyDescriptor){
       
        descriptor.writable = value;
        console.log(proName);
    }
}


 // Property decorators example
function overwritable(value:boolean){
    return function(target:any, proName:string):any{
        const newDescriptor : PropertyDescriptor = {
            writable:value

        };
        return newDescriptor;
    }
}

 class Proyect {
@overwritable(true)
projectName: string;

constructor (name:string){
    this.projectName = name;
}

@editable(false)
calcBudget (){
    console.log(1000);
}

 }

 const project = new Proyect("Super Project");

 project.calcBudget();
 project.calcBudget = function(){
     console.log(2000);
 }
 project.calcBudget();


 console.log("--------");
 console.log(project);
 console.log("--------");



//Parameter Decorator

function printInfo(target:any, methodName:string, paramIndex:number){
    console.log("Target:", target);
    console.log("methodName:", methodName);
    console.log("paramIndex:", paramIndex);
}

class Course {
    name:string;

    constructor(name:string){
        this.name=name;
    }

    
    printStudentName(mode:string, @printInfo printAll:boolean){
        if (printAll) {
            console.log(10000);
        } else {
            console.log(2000);
        }
    }
}

const course =  new Course("Couse");
course.printStudentName ("anything", true);
course.printStudentName ("anything", false);