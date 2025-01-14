// static keywords can be used on both methods/functions and attributes/properties/variables, and they are none-access modifiers
// Meaning, they used on variables and methods that are associated with the class rather than with each instance of the class. E.G

class Hen {
    static count_instance: number = 0

    name: string

    constructor (name: string) {
        Hen.count_instance++
        this.name = name;
    }

    static decrease_count() {
        this.count_instance--;
    }
}

const hen1 = new Hen("chika")
console.log(Hen.count_instance) //1

const hen2 = new Hen("chike")
console.log(Hen.count_instance) // 2

// Static values are associated with the class itself rather than instance of the class. adding this to the constructor means everytime an instanciation happens , it counts.
// this is also useful when the instances of a class should have a common shared value or variable that belongs inside the class.
// same applies to static methods. see above.
// Note that the static method in a class can only use or access variables associated with the class.
// Also, the static method can only be called by the class itself not an instace. 

// E.g 
Hen.decrease_count()