// Namespaces is similar to typescript Modules. But it helps organize code into differnt blocks within an individual file

namespace Utils {

    export function add(a: number, b:number): number{
        return a + b
    }
    export function sub (x: number, y: number ) : number{
        return x - y
    }

    export class Animal {

    }
    export interface Person { 
        name: string
        age: number
    }
    export const humanB: string = "Ted"
}

const somet: Utils.Animal = Utils.add(3, 4)

// Exporting to another file works pretty much the same. in another file because of the namespace keyword, you dont have to use import keyword.

const result = Utils.sub(7, 8) // this works in another file as well
