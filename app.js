"use strict";
let x;
x = "hello";
console.log("Ebun, King, ", x);
function mul(x, y) {
    return x * y;
}
function div(x, y) {
    return x / y;
}
function applyFunc(funcs, val) {
    const results = [];
    for (let i = 0; i < funcs.length; i++) {
        const args = val[i];
        const result = funcs[i](args[0], args[1]);
        results.push(result);
    }
    return results;
}
const answer = applyFunc([mul, div], [[1, 2], [3, 4]]);
console.log("the answer is: ", answer);
