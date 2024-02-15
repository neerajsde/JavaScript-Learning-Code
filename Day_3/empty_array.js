let nums = [1, 2, 4, 3, 5];

console.log(nums);
nums.length = 0;

console.log(nums);


nums = [1, 2, 4, 3, 5];
console.log(nums);
nums.splice(0, nums.length);
console.log(nums);