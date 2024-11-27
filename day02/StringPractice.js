let schoolName = "Cydeo School";
console.log(typeof schoolName);
console.log(schoolName.length);
console.log(schoolName[schoolName.length - 1]);
console.log(schoolName[0]);
console.log(schoolName[5]);

console.log("--------------------------------");
let program = "javascript";
//console.log(program.toUpperCase());
program = program.toUpperCase();
console.log(program);

console.log("--------------------------------");

let word1 = "JavaScript";
let word2 = "javascript";

console.log(word1 === word2); // false
console.log(word1.toLowerCase() === word2.toLowerCase()); //true

console.log("--------------------------------");

let s = "ABCDEFGHIJKL";
console.log(s.includes("J"));
console.log("--------------------------------");

let x = "Python Python";
let x2 = x.charAt().replace(x(1), "JavaScript");
console.log(x2);
console.log("--------------------------------");

let email = "cydeoschool@hotmail.com";

let domain = email.substring(email.indexOf("@") + 1, email.lastIndexOf("."));

console.log(domain);
