let peter = new Person('Peter', 25);  // Class Hoisting
console.log(peter);
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}