// type guard is used to check the type of a data type or a specific value. and narrowing down it type in a conditional block.

// example: typeOf, instanceOf, in
// typeOf is for type. instance Of is for class and in is for the passed parameter

// type guard gives room for "type Narrowing." which allows us take a more general type and narrowing it to a more concrete type." E.G

type StringOrNumber = string | number;

function add1(value: StringOrNumber): StringOrNumber{
    if (typeof value === "string") {
        return value + "1"
    } else {
        return value + 1
    }
} 

// instanceOf type guard and type narrowing
class Lion {
    firstName: string
    lastName: string

    constructor (f: string, l: string) {
        this.firstName = f
        this.lastName = l
    }
}

class Wolf {
    firstName: string

    constructor(f:string) {
        this.firstName = f
    }
}

function getNames(animal: Lion | Wolf) {
    if (animal instanceof Lion) {
        console.log(animal.firstName, animal.lastName)
    } else {
        console.log(animal.firstName)
    }
}

// in type guard and type narrowing

class Rabbit {
    firstName: string
    lastName: string

    constructor (f: string, l: string) {
        this.firstName = f
        this.lastName = l
    }
}

class Hare {
    firstName: string

    constructor(f:string) {
        this.firstName = f
    }
}

function getNames2(animal: Rabbit | Hare) {
    if ("lastName" in animal) {
        console.log(animal.firstName, animal.lastName)
    } else {
        console.log(animal.firstName)
    }
}
// "In" is like saying, if certain constructor attribute is found in the instance of a class, passed as a parameter

// "is" TypeGuard comes with building a custom typer

function isRabbit (animal: Rabbit | Hare): animal is Rabbit {
    return (animal as Rabbit).lastName != undefined
}

// now with the custom type guard function above we can narrow the type

function getName3(animal: Rabbit | Hare) {
    if (isRabbit(animal)) {
        console.log(animal.firstName, animal.lastName);
    } else {
        console.log(animal.firstName);
    }
}
