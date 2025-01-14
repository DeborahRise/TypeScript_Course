// A Module is typically just a typescript file. In amodule we either import or export code

// T0 better organise our codes to easier mainitain and locate components

export function add(a: number, b:number): number{
    return a + b
}

// named export means adding export to the front of function keyword or "export" keyword curly braces and the function names at the bottom of page

// export { add, otherfxns} This is called NAMED EXPORT

// only one item can be exported as default export and it can be named anything when importing

function sub (x: number, y: number ) : number{
    return x - y
}

export default sub
// this can be imported without braces and as any name

// to import we do

//  import something from "./some/where"

// when more than one function have similar names, we can use alias during import

// import {add as addition} from ""./some/where"" ; assuming morethan one function is named add.
// The paths are called relative paths. Note they can be absolute or alliased
