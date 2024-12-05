class Person {
  //attributes: name, age, gender
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
  //create eat method.
  eat() {
    console.log(`${this.name} is eating.`);
  }
}

class Student extends Person {
  //name, age, gender, grade
  constructor(name, age, gender, grade) {
    super(name, age, gender);
    this.grade = grade;
  }
  //create study method

  study() {
    console.log(`${this.name} is studying.`);
  }
  sport() {
    console.log(`${this.name} is playing.`);
  }
}

class Teacher extends Person {
  //name, age, gender, grade
  constructor(name, age, gender, subject) {
    super(name, age, gender);
    this.subject = subject;
  }

  //create teach() method.
  teach() {
    console.log(`${this.name} is teaching.`);
  }

}
//create objects

let student1 = new Student("John", 18, "Male", "9th");
console.log(student1);
student1.eat();
student1.study();
student1.sport();

let teacher1 = new Teacher("Jane Smith", 35, "Female", "Mathematics");
console.log(teacher1);
teacher1.eat();
teacher1.teach();

let teacher2= new Teacher ("Bilal Koca", 56, "Male", "SDET");
console.log(teacher2);
teacher2.teach();


class Sportmen extends Person {
  constructor(name, age, gender, sport) {
    super(name, age, gender);
    this.sport = sport;
  }

//create a sport function   
 playSport() {
    console.log(`${this.name} is playing ${this.sport}.`);
}

}
//create a sportmen object.

let sportman1 = new Sportmen("Sara", 25, "Female", "Basketball");
console.log(sportman1);
sportman1.eat();
sportman1.playSport();

class Citizen extends Person {
  constructor(name, age, gender, country) {
    super(name, age, gender);
    this.country = country;
  }
  vote (){
    console.log(`${this.name} is voting in ${this.country}.`);
  }
}

let citizen1=new Citizen ("Bilal", 45, "Male", "TR");
console.log(citizen1);
citizen1.eat();
 citizen1.vote();




