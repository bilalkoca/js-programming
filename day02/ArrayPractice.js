let elements = ["Java", "JavaScript", "Python", 10, 20, 30, true, false];

console.log(elements);
console.log("--------------------------------");

let students = ["Irina", "Maryam", "Daniela", "Andrei"];
console.log(students);
console.log(students.length);
students.push("Ilia", "Julia"); //add last
console.log(students);

//students[students.length-3]="Sophy";//change
console.log(students);

//students.unshift("Ahmed"); //add first
console.log(students);

//students.splice(1, 2);//remove 1. and 2. element
//console.log(students);

//students.shift();//remove first
//students.pop();//remove last
//console.log(students);

console.log("--------------------------------");

for (let i = students.length - 1; i >= 0; i--) {
  console.log(students[i]);
}
console.log("--------------------------------");

let numbers = [1,2,3,4,5,6,7,8,9,10];
for(let i=numbers.length-1; i>=0; i-- ){
  console.log(numbers[i]);
}
