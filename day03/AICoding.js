//create a for loop that strts from 1 and end at 8 only with empty body.

for (let i = 1; i < 8; i++) {
  console.log(i);
}

console.log("--------------------------------");

// create an array of string and add 7 students names (first and last names both) to it.

let students = ["Irina", "Maryam", "Daniela", "Andrei"];
students.push("Ilia", "Julia");

console.log(students);

//display all students names on console by using for of loop.

for (let student of students) {
  console.log(student);
}

console.log("--------------------------------");

//set the first student name to "Abdiwali Mohamed" and last student  to "Furkan Aktas".

students[0] = "Abdiwali Mohamed";
students[students.length - 1] = "Furkan Aktas";

console.log(students);

//display alla students name in reversed order.

for (let i = students.length - 1; i >= 0; i--) {
  console.log(students[i]);
}

console.log("--------------------------------");

let email="cydeo_school@yahoo.com";
//check if the email address contains '@gmail.com'.

if(email.includes('@gmail.com')){
  console.log("Email is valid");
}else{
  console.log("Email is not valid.");
}

console.log("--------------------------------");
//use sting manipulation to retrieve the domain of the email.

let domain=email.substring(email.indexOf('@')+1,email.lastIndexOf('.'));
console.log("Email domain is:", domain); //yahoo

console.log("--------------------------------");

//create a function that can verify if a string is palindrome.

function isPalindrome(str) {
  let reversedStr = str.split("").reverse().join("");
  return str === reversedStr;
}

console.log(isPalindrome("racecar")); //true

console.log(isPalindrome("hello")); //false

//convert the last solution to ternary format.

console.log(isPalindrome("racecar")? "Palindrome" : "Not Palindrome"); //Palindrome

console.log(isPalindrome("hello")? "Palindrome" : "Not Palindrome"); //Not Palindrome

console.log("--------------------------------");
let numbers = [100,200,300,400,5,6,7,8,9,11,10];
//write a program that can display the min and max number from numbers array, don't use sort function.

let minNumber = numbers[0];
let maxNumber = numbers[0];

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] < minNumber) {
    minNumber = numbers[i];
  }
  if (numbers[i] > maxNumber) {
    maxNumber = numbers[i];
  }
}













  

