//Welcome to OOP. Objeted oriented programming.

// First; Access modifiers consist of public(default) - accessible anywhere, protected-accessible only the class and extended/inheriting child classes and private, only accessible within the class.

class People {
     private name: string;
     protected age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    } // Note the constructor constructs an instance of the class. so it is called when an instance of the class is created.
    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }

    //we can add a getter that can return the name or controll the value using a get method, especially when the name property is private
    getName() {
        if (this.name.length < 3) return "Fullname please"
        return this.name
    }

    // Also we can use a setter from within the class to modify the name, when the name property is private
    
    public setName(name : string) { //it is public by default, so need specifying
        if (name.length < 5) return
        this.name = name;
    }
    
}

// To create an instance of a People

const newPeople1 = new People("deb", 23);
// adding private before the name property on line 6 makes it inaccessible. so we cant do newPeople1.name if we add the keyword private to the name property
newPeople1.getName()

// REASON: When we have an internal state that is part of our class that we dont want to be modified or accessed by other programmers or anything outside.
// This means when "deb is passed into the constructor, it cannot be changed or altered anywhere else except within the class by calling a method. eg. getter or setter method".

// PROTECTED HOWEVER MEANS: The People Class or anything inheriting or extending from the people class can access the name property

class Human extends People {
    race: string

    constructor(name: string, age: number, race: string) {
        super(name, age);
        this.race = race;

       }
       callMe() {
        console.log(this.age)
    }
}

// This can be done for both methods (functions in a class) as well as properties/attributes.

// **************** NOW ABSTRACT CLASSES *******************
// An abstract class is not meant to be used to create the instance of an object.
// Meaning it shouldn't be instantiated, but designed specifically as base class, for implementing certain behaviour. It can only be inherited from by a subclass.

abstract class Animal {
    name: string;
    abstract makeSound(duration: number): void

    move(duration: number){
        console.log("Move along");
        this.makeSound(duration)
    }

    constructor(name: string) {
        this.name = name;
    }
}

class Dog extends Animal {
    makeSound(duration: number): void {
        console.log("Woof Woof!")
    }
}

class Cat extends Animal {
    makeSound(duration: number): void {
        console.log("Meeeoooww!")
    }
}

// Now we can create an instance ofn the subclass not the parent class as the parent class is abstract

const first_dog = new Dog("bingo")
first_dog.move(10)



// const firstAnimal = new Animal("goat") => uncommented will give an error. check to see error
// However, an abstract method can be defined inside the abstract class. this must be implemented by a subclass. inorder for that to be possible, another CONCRETE implementable method should be defined in the abstract parent class and  the abstract method called in the concrete method. so, in the subclass, the abstract method in the parent class must be define. see examples above