// CLASSES IMPLEMENTING INTERFACES

interface Mammals {
  speak(): void;
}
//An Interface is abstract, because it doesn't actually define any functionality or behviour. It contains methods that are considered always abstract or non-implemented
// interfaces can be used for classes or objects
// the above sentence means an if an interface can influence an object, it can for a class too, because a class is really a blueprint for creating objects

// SO to have the subclass inherit from an iterface. we use implements

class Pig implements Mammals {
  private name: string;
  protected age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  speak(): void {
    console.log(`my name is ${this.name} and I am ${this.age}`);
  }
  //    multiple methods can be added.

  test() {
    return 1;
  }
}

class Goat implements Mammals {
    // remember you must define the method in the Mammals interface.
    speak(): void {
        console.log("Mmeehh")
    }
}

// now we can create instances of Pig and Goat as soo

const pig = new Pig("lee", 36); // this will be of type Pig
const goat = new Goat(); // and this will be of type Goat

// now watch this
const animal: Mammals = pig //now this is of type animal. a step further
const animals: Mammals[] = [pig, goat]; 
// so even though pig and goat are originally of different type, because they "IMPLEMENT" the Mammals Interface, we can view them like they are the same type and treat them like they are "Mammals"
animals[0].speak() // therefore only the Method Speak() defined in the Mammals interface can be used. BUT WHY IS THIS IMPORTANT. LET'S SEE BELOW

function makeSound(animal: Mammals) {
    animal.speak()
}
makeSound(pig)
//Basically all this is important because it abstracts the subclass. This way, you dont need to know the detailed definition of the subclass, so long as it "IMPLEMENTS" the Mammal Class, all you would see is the method or attribute related to the Mammal Class. so we can treat many different objects like they are the same. 
// By this, we look at an object through the lens of a specific interface. This interface allows us group diffeent things together and hide the complexity we dont care about

// ******** WHEN TO USE AN INTERFACE Vs AN ABSTRACT CLASS Vs A BASE CLASS *****

// 1. use an interface when there is no functionality that you want to define concretely
// 2. use an Abstract Class when you are going to be writing a behavior that will be reused by one of the concrete classes. It should contain some concrete method/function that will be reused by other concrete classes. E.g move() in "4classes_AbstactClasses.ts".
// 3. when no abstract classes or functionality needs to be implemented, you can use the regular base Class

// note: the whole idea of inteface is high level "abstraction" and easy grouping of classes or objects.