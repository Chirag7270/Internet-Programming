// Using Function Constructor
function PersonConstructor(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;

    // Member method using a normal function
    this.details = function() {
        console.log(`(Constructor) Name: ${this.name}, Age: ${this.age}, City: ${this.city}`);
    }
}

// Arrow function (non-member function for PersonConstructor)
const greetPersonConstructor = (person) => {
    console.log(`(Constructor) Hello, ${person.name}!`);
};

// Creating a Person instance using function constructor
let person1 = new PersonConstructor("John Doe", 30, "New York");

// Calling the details method (member function)
person1.details();

// Calling the arrow function (non-member)
greetPersonConstructor(person1);


// Using ES6 Class Syntax
class PersonClass {
    constructor(name, age, city) {
        this.name = name;
        this.age = age;
        this.city = city;
    }

    // Member method using a normal function
    details() {
        console.log(`(Class) Name: ${this.name}, Age: ${this.age}, City: ${this.city}`);
    }

    // Member method using an arrow function
    greet = () => {
        console.log(`(Class) Hello, ${this.name}!`);
    }
}

// Creating a Person instance using ES6 class
let person2 = new PersonClass("Alice Johnson", 25, "San Francisco");

// Calling the details method
person2.details();

// Calling the arrow function method
person2.greet();
