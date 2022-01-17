// FUNCTION - first method
// function Person(firstName, lastName, dob){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date(dob);
// }

// Person.prototype.getBirthYear = function(){
//     return this.dob.getFullYear();
// }

// Person.prototype.getFullName = function(){
//     return `${this.firstName} ${this.lastName}`;
// }

// CLASS - second method
class Person {
    constructor(firstName, lastName, dob){
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }

    getBirthYear(){
        return this.dob.getFullYear();
    }

    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }
}

// INSTANTIATE OBJECT
const person1 = new Person('John', 'Doe', '4-3-1980');
const person2 = new Person('Mary', 'Smith', '3-6-1970');

console.log(person1.getBirthYear());
console.log(person2.getFullName());