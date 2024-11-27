for (let i = 0; i < 5; i++) {
  console.log("Hello");
}
console.log("--------------------------------");
for (let index = 1; index < 8; index++) {
  console.log(index);
  if (index == 4) {
    break;
  }
}
console.log("--------------------------------");
for (let index = 1; index < 8; index++) {
  if (index == 2 || index == 6) {
    continue;
  }
  console.log(index);
}
console.log("--------------------------------");
let email = "cydeoschool@hotmail.com";

let domain = email.substring(email.indexOf("@") + 1, email.lastIndexOf("."));

console.log(domain); //hotmail
console.log("--------------------------------");
let course = "Playwright";

for (let i = 0; i < course.length; i++) {
  console.log(course[i]);
}
console.log("--------------------------------");

let employeeName = "Roberta";
let employeeAge = 28;
console.log(
  "Employee name is " +
    employeeName +
    " and employee age is " +
    employeeAge +
    " years old."
);
console.log(
  `Employee name is ${employeeName} and employee age is ${employeeAge} years old.`
);

let title = "Google";
console.log(`Title of the page is ${title}.`);
