// // Object Clone #1
// let src = {
//     a:10,
//     b:20,
//     c:30
// }

// let dest = {};
// // 1: Iteration Approach
// for(key in src){
//     dest[key] = src[key];
// }
// // check dest
// console.log(dest);

// // Object Clone #2
// let src = {
//   a: 10,
//   b: 20,
//   c: 30,
// };

// let src2 = { value: 10 };
// let dest = Object.assign({}, src, src2);
// console.log(dest);

// dest.a++;
// console.log(src);
// console.log(dest);

// Object Cloning #3
let src = {
    a:10,
    b:20,
    c:30
}
let dest = {...src};
console.log(dest);

dest.a++;
console.log(src);
console.log(dest);