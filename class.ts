class PersonClase {
    public name:string;
    private type:string = "hola";
    protected age:number;

    constructor(name:string, public username:string){
        this.name = name;
        this.age=36;
    }


printAge() {
console.log(this.age);
}


private setType (type:string){
    this.type = type;
    console.log(this.type);
}

}




const person =  new PersonClase("Guillermo", "Osito");
console.log (person);

person.printAge();
//person.setType("ddCerote");


class Pollito extends PersonClase {
//name = "victoria";
   // const guillermo =  new Guillermo();
  public _numbereyers:number = 0;
constructor(username:string) {
super ("Laura", username);
//this.age = 37;

}

set numbereyers(value:number) {
    //if (value.length>3){
        this._numbereyers = value;
    //} else {
      //  this._species="Default"; 
    //}
}
//}


}

const guillermo =  new Pollito("Pollito");
guillermo.numbereyers = 555;
console.log(guillermo);



//getters and setters

class Plant {

    private _species:string = "Default";

get species (){
    return this._species;
}

    set species(value:string) {
        if (value.length>3){
            this._species = value;
        } else {
            this._species="Default"; 
        }
    }
}

let plant = new Plant;
console.log(plant.species);
plant.species = "AffC";
console.log(plant.species);


// static properties and methoids

class Helpers {

  static PI: number = 3.145;
  static calcCircunference (diameter:number):number{
     return this.PI * diameter; 
  }
}

var helkping = new Headers;

var helkping = new Headers;
console.log (2 * Helpers.PI);
console.log(Helpers.calcCircunference(5));


//abstract class
abstract class Project {
    projectName:string = "Default";
    budget:number = 100;
    cerote = 20;

    abstract changeName (name:string): void;

    calcBudget (){

        return this.budget * 2;
    }
}

class ITPorject extends Project {
    memo = 50;
    changeName(name:string):void{
        this.projectName=name;
    }
}

let newProject = new ITPorject();
console.log (newProject);
newProject.changeName("hola")
console.log (newProject);

