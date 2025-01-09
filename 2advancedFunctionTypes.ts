// Starting with rest parameters and then Overloaded functions

// with type script you can call a function with as many arguments as you want dynamically.

function sum(...numbers: number[]) {
    return numbers;
}

// you can call this function with as many arguments as you like. e.g

sum(1, 2)
sum()
sum(34, 45, 89, 50, 83, 10019)

function sumString(strings: string, ...numbers: number[]) {
    return numbers;
}

// you can call this function with as many arguments as you like. e.g

sumString("hello", 1, 2)
sumString("")
sumString("hey", 34, 45, 89, 50, 83, 10019)

// OVERLOADED FUNCTION: Is a function that has different call signatures and can accept different types. E.g:

function getItemLength(name: string | string[], names: string | string[]) : number {
    return name.length | names.length
}

getItemLength("deb", "vic");
getItemLength("deb", ["deb", "vic"]);

// The issue with the above is how you can call one function in too many different ways. This means that as we work on each value, too many typecasting will need to be done as some point. that is where "Overloaded Function Comes In"

function getitemsLength(name: string): number;
function getitemsLength(names: string[]): number;
function getitemsLength(nameOrNames: unknown): number{
    if (typeof nameOrNames === "string"){
        return nameOrNames.length
    } else if (Array.isArray(nameOrNames)) {
        return nameOrNames.length
    }
    return 0
}

// This way, the function getItemsLength can be defined many times, so long as the type of the function differs. And on hovering over, you will see an overload indication.