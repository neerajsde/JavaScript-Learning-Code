let nums = [2,4,3,1,6,7];

console.log(nums);

// insertion 
nums.push(10); // insert at end
console.log(nums);

nums.unshift(8); // insert at begin
console.log(nums);

nums.splice(2, 0, 50); // inert at middle
console.log(nums);

// searching
let ans = nums.indexOf(4);
console.log(ans);
ans = nums.indexOf(15);
console.log(ans);
ans = nums.includes(5); // false - not persent
console.log(ans);
ans = nums.indexOf(7, 3); // (num, index)
console.log(ans);