function curry(fn) {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn(...args);
        } else {
            return function(...moreArgs) {
                return curried(...args, ...moreArgs);
            };
        }
    };
}
function add(a, b) {
    return a + b;
}
const curriedAdd = curry(add);
console.log(curriedAdd(5)(3)); // 8
console.log(curriedAdd(10)(20)); // 30
