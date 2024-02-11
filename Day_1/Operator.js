// Assignment operator
let a = 10;
console.log(a);
a += 20;
console.log(a);

// Comparsion operator
let age = 18;
if(age > 18){
    console.log('Vote');
}
else if(age === 18){
    console.log('Now Vote');
}
else{
    console.log('Not eligiable for Vote');
}

// Equality Operator
let x = 10;
let y = '10';
// loose equality
if(x == y){
    console.log('x and y are equals');
}

// strict equality
if(x === y){
    console.log('true')
}
else{
    console.log('false');
}

// ternary Operator
let YourAge = 20;
let isVaildAge = YourAge >= 18 ? true : false;
console.log(isVaildAge);

// logical operator
let i = 5, j = 5, k = 5;
if(i === j && j === k && k === i){
    console.log('here it is same value')
}
else{
    console.log('here is not same value');
}

// with non-boolean 
console.log(false || 2.2);
console.log(false || 'neeraj');
console.log(68787 || 'hello');
console.log(false && 'hello');
console.log(false || null);


// Bitwise Operator -- Check EVEN Or ODD
let num = 11;
if(num & 1){
    console.log('Odd number');
}
else{
    console.log('Even number');
}