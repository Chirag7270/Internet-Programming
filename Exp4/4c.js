// Person Class
class PersonClass {
    constructor(name, age, city) {
        this.name = name;
        this.age = age;
        this.city = city;
    }

    // Member method using a normal function
    details() {
        console.log(`Name: ${this.name}, Age: ${this.age}, City: ${this.city}`);
    }

    // Member method using an arrow function
    greet = () => {
        console.log(`Hello, ${this.name}!`);
    }
}

// Student Class that inherits from PersonClass
class StudentClass extends PersonClass {
    constructor(name, age, city, rollNo, course) {
        // Call the constructor of the parent class (PersonClass)
        super(name, age, city);

        // Validate roll number (throwing an exception if the roll number is invalid)
        if (rollNo <= 0) {
            throw new Error("Invalid Roll Number: Roll number must be greater than zero.");
        }

        this.rollNo = rollNo;
        this.course = course;
    }

    // Overriding the details method to include student-specific details
    details() {
        // Call the parent class's details method using super
        super.details();
        console.log(`Roll No: ${this.rollNo}, Course: ${this.course}`);
    }

    // Member method specific to StudentClass
    study() {
        console.log(`${this.name} is studying ${this.course}.`);
    }
}

try {
    // Creating a Student instance with valid data
    let student1 = new StudentClass("John Doe", 20, "New York", 101, "Computer Science");
    student1.details();  // Will call the overridden method in StudentClass
    student1.greet();    // Inherited from PersonClass
    student1.study();    // Specific to StudentClass

    // Creating a Student instance with an invalid roll number (to trigger an exception)
    let student2 = new StudentClass("Alice Johnson", 22, "Los Angeles", 0, "Mathematics");
} catch (error) {
    console.error(`Error: ${error.message}`);
}
