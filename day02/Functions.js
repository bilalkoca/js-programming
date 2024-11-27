function greetings() {
    console.log("Hello Programmers!");
    console.log("Hello CYDEO!");
}

greetings();    //no argument function
greetings();
greetings();

console.log("----------------------------------------------------------------");

function displayValue(value="Unknown") {    //default value is undefined
    console.log(`The value is ${value}`);
}
displayValue(100000);// argument function
displayValue("JavaScript");
displayValue(true);
displayValue();
console.log("----------------------------------------------------------------");

function square(value) {
    let result=value * value;
    console.log(`The square of the ${value} is ${result}`);
    return result;
    }

square(5);