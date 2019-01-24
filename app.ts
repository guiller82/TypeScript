type BankAccountType = {money:number, deposit:(val:number)=>void};

let bankAccount:BankAccountType = {
money: 2000,
deposit (value:number):void {
    this.money += value;
}

};

let myself:{name:string, bankAccount:BankAccountType, hobbies:string[]} = {

name: "Guillermo",
bankAccount: bankAccount,
hobbies:["Sports","Cooking"]


};

myself.bankAccount.deposit(3000);
//console.log(myself);


let FuntionOsito = function Osito (numero:number) :number {

    return 0.5 * numero;
}

function porCien() : void {
console.log (FuntionOsito(50) *100);
}


console.log(FuntionOsito(51));
porCien();

console.log (" SPREAD");
const numbersq = [1,1,54,864];
console.log(Math.max(...numbersq))


console.log ("REST ");
//const numbersq = [1,1,54,864];
//console.log(Math.max(...numbersq))


function makeArray (...args:number[]){
return args;

}

console.log(makeArray(45,4,5,5,5,52,24));

//DESTRUCTOR
console.log ("destructor");
const myHobbies = ["cooking", "holing"]; 
const [hoby1, hoby2] = myHobbies;
console.log (myHobbies[0] , myHobbies[1]);
console.log (hoby1, hoby2)

//DESTRUCTOR objects
const userdata = {username: "osito", ages: 36};
//const user = userdata.username;
//const age = userdata.ages;
const {username, ages} = userdata;
console.log(username, ages);

// temnplate liberals

const myname = "Osito";
const greeting = `This is a heading!
${myname} I am co
ol
`;

console.log(greeting);