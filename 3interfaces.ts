// Interfaces allows us to create types for objects. It allows for creation of more complex types. 
// Interfaces is a programming structure/syntax that allows the computer to enforce certain properties on an object(class)
// think of it as expressly statting what the type of values of an object shoul be. "interface should be a reserved word"

interface Person {
    name: string;
    age: number
    hello: () => void;
}

const person: Person ={
    name: "him",
    age: 23,
    hello: function () {
        console.log(this.name + " says hello");
    }
}

person.hello()
person.age;

// Person becomes a type that can be used to create other objects. So all the predefined types must reflect in the created class

// More Advanced Example of  interfaces
// To create another interface  that has type of an existing interface, you can extend instead of repeat. 

interface Employee extends Person {
    empId: number
}

const emp1: Employee = {
    name: "deb",
    age: 23,
    hello: function (){
        console.log(this.name + "is ", this.age + "years old")
    },
    empId: 101
}

// Going a step further. Extending Multiple interfaces

interface Employees {
    salary: number
    rank?: string // "?" means this property or param in case of functions is optional
}

interface Manager extends Employees, Person {
    employees: Person[]
}

const manager: Manager = {
    name: "deb",
    age: 23,
    hello: function (){
        console.log(this.name + "is ", this.age + "years old")
    },
    salary: 101000,
    employees: []

}

// interface can be used in a function and makes it easier to read that typing out all the needed parameters e.g:

function getPerson(pers: Person): Person{
    return {
        name: "josh",
        age: 34,
        hello: function (){
            console.log(this.name + "is ", this.age + "years old")
        },
    }
}

// remember: Use interrfaces to type in object that has different properties.
// Also, an interface can extend another interface and the child interface inherits the merthods of the parent interface.