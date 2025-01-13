// Generics: 

// firstly, check out this classic data store performing the required crud functions

class DataStore {
    private items: number[] = [];

    addItem(item:number):void {
        this.items.push(item);
    }

    getItem(index: number): number {
        return this.items[index];
    }

    deleteItem(index: number): void {
        this.items.splice(index, 1)
    }

    allItems(): number[] {
        return this.items;
    }
}

const data = new DataStore()

data.addItem(1);
data.getItem(0);

// The above data store is strictly for numbers as you can see. can only take in an array of numbers and return numbers to. So what if I want to apply the DataStore on strings???
// Now this is where "GENERICS" come in. Instead of creating a different class for that, we can determine the types variably. i.e use variables to pass the types to the DataStore, based on the instance of the class that we need.

// using angle brackets to show generic typing

class GenDataStore<variableType> {
    private items: variableType[] = [];

    addItem(item:variableType):void {
        this.items.push(item);
    }

    getItem(index: number): variableType {
        return this.items[index];
    }

    deleteItem(index: number): void {
        this.items.splice(index, 1)
    }

    allItems(): variableType[] {
        return this.items;
    }
}

const gen_data = new GenDataStore<string>()

gen_data.addItem("hello");
gen_data.getItem(0);

// Hmmm.. makes sense.

// Taking it a step further we can define a type using an interface and that can be the type of the "GenDataStore".

interface User {
    name: string;
    age: number;
}

const gen_newUser = new GenDataStore<User>()
gen_newUser.addItem({ name: "deb", age: 23 });

// In this case an object of the type "User" is what is passed as a single item to the functions

// More Examples

function getValue<K, V>(key: K, val1: V, val2: V): V {
    if (key) return val1
    return val2
}

getValue<string, number>("hello", 1, 5)

// We are pretty much creating variables for the datatype we instend to use. we are making it dynamic. It allows for more flexible functions, classes, methods, attributes for any datatype.