let num1 = [1,2,3];
let num2 = [4,5,6];

let combined = num1.concat(num2);
console.log(combined);
console.log(combined.slice(2, 4)); // (start_index, end_index)

// Combine and Slice Objects
let obj1 = [
    {no:10, name:'Math'},
    {no:20, name:'Physics'},
    {no:30, name:'Chemistry'},
];
let obj2 = [
    {no:40, name:'English'},
    {no:50, name:'Hindi'},
    {no:60, name:'Coding'},
];

// combining Object
let ans = obj1.concat(obj2);
console.log(ans);

// slicing Objects
console.log(ans.slice(2, 4));
