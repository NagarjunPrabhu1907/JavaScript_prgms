const PromiseA = Promise.resolve('Hello');
const PromiseB = 'World';
const PromiseC = new Promise(function(resolve, reject) {
setTimeout(resolve, 100, 1000);
});
Promise.all([PromiseA, PromiseB, PromiseC]).then(function(values) {
console.log(values);
});
