var bankAccount = {
    money: 2000,
    deposit: function (value) {
        this.money += value;
    }
};
var myself = {
    name: "Guillermo",
    bankAccount: bankAccount,
    hobbies: ["Sports", "Cooking"]
};
myself.bankAccount.deposit(3000);
//console.log(myself);
var FuntionOsito = function Osito(numero) {
    return 0.5 * numero;
};
function porCien() {
    console.log(FuntionOsito(50) * 100);
}
console.log(FuntionOsito(51));
porCien();
console.log(" SPREAD");
var numbersq = [1, 1, 54, 864];
console.log(Math.max.apply(Math, numbersq));
console.log("REST ");
//const numbersq = [1,1,54,864];
//console.log(Math.max(...numbersq))
function makeArray() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args;
}
console.log(makeArray(45, 4, 5, 5, 5, 52, 24));
//DESTRUCTOR
console.log("destructor");
var myHobbies = ["cooking", "holing"];
var hoby1 = myHobbies[0], hoby2 = myHobbies[1];
console.log(myHobbies[0], myHobbies[1]);
console.log(hoby1, hoby2);
//DESTRUCTOR objects
var userdata = { username: "osito", ages: 36 };
//const user = userdata.username;
//const age = userdata.ages;
var username = userdata.username, ages = userdata.ages;
console.log(username, ages);
// temnplate liberals
var myname = "Osito";
var greeting = "This is a heading!\n" + myname + " I am co\nol\n";
console.log(greeting);
