let schoolName="Cydeo School";
console.log(schoolName);
console.log(typeof schoolName);

let value1 = true;
console.log(value1);
console.log(typeof value1);

let value2=100;
value2=101;
console.log(value2);
console.log(typeof value2);

//let vs var;
//var: global variable,
//let: using sooner,
//local variable is not reachabel from outside, it is just in block,

if(true ){
    //let num=300; (let is local var.here)
    var num=400;    //var is global variable,here
}
console.log(num);

let country ="Turkey"; //let must be unique,
let country ="Japan";

var country1="Turkey"; //var may be duplicated,
var country1 ="Japan";