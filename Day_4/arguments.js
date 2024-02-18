// function sum(a,b){
//     return a + b;
// }
// console.log(sum(10, 20));

function sum(){
    let total = 0;
    for(val of arguments){
        total += val;
    }
    return total;
}
console.log(sum(1,2,3,4,5,6,7));

function sum2(...args){
    console.log(args); // this will be return array
}
sum2(1,2,3,4);