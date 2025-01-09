let x: string;


x = "hello";

console.log("Ebun, King, ", x);

function mul(x: number, y: number): number{
    return x * y
}
function div(x: number, y: number): number{
    return x / y
}

function applyFunc(
    funcs: ((x: number, y: number) => number)[], 
    val: [number, number][]
): number[] {
    const results = [] as number[];
    for (let i = 0; i < funcs.length; i++) {
        const args = val[i];
        const result = funcs[i](args[0], args[1]);
        results.push(result);
    }
    return results;
}

const answer = applyFunc([mul, div], [[1,2], [3,4]]);
console.log("the answer is: ", answer)

