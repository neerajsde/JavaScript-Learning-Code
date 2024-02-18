const arr = [10,20,30,40,50];

let totalSum = arr.reduce((accumulator, currentVal) => accumulator + currentVal, 0);
console.log(totalSum);