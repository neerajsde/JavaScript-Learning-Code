let nums = [7,8,9,10];

// Add Prefix all elements
var it = nums.map(function(value){
    return 'student_'+value;
});
console.log(nums);
console.log(it);

// multiply whole array of 2
var mul_2 = nums.map(value => value*2);
console.log(mul_2);