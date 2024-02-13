// Refference Variable 

// Primitive
function fun(a){
    a++;
}

let a = 10;
console.log(a);
fun(a);
console.log(a);

function inc(a){
    a.value++;
}

let b = {
    value:10
}
console.log(b.value);
inc(b);
console.log(b.value);