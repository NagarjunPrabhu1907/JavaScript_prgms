const Func= (name,age=21)=>{
    return `hi ${name},your age is ${age} years old`;
}
console.log(Func('Arjun'));


function sum(x, y = 5) {
    console.log(x + y);
}

sum(5); 
sum(5, 15); 