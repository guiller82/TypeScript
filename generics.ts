//simpleGeneric
function echo (data:any){
    return data;
}

//better generic way

function betterEcho<T>(data:T){
return data;

}

console.log(betterEcho("Max"));
console.log(betterEcho<number>(5));
console.log(betterEcho({nombre:"guillermo", edad:36}));


// built-in generics

const testResultsx:Array<number> = [1,2,3,];
testResultsx.push(552);
console.log(testResultsx);

//arrays

function printAll <T> (args:T[]) {
args.forEach((elemesnt) => console.log(elemesnt));

}

printAll([4,5,8,9,5]);


//generic types

const echo2:<T>(data:T) => T= betterEcho;

console.log(echo2<string>("hola"));


//generic clas 

class SimpleMath<T, U extends number | string> {
    baseValue:T;
    multiplyValue:U;
    calculate():number{
        return +this.baseValue * +this.multiplyValue;
    }
}

const simpleMath = new SimpleMath<string, number>();
simpleMath.baseValue = "10";
simpleMath.multiplyValue = 5;
console.log(simpleMath.calculate());

