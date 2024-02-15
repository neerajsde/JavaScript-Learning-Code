let nums = [10, -5, 20, -90, 30, 8, 9, -3, 90];

// filter negative numbers
let neg_nums = nums.filter(function(num){
    return num < 0;
});

console.log(neg_nums);

// filter number grater than equal 18
let adult = nums.filter(function(num){
    return num >= 18;
});
console.log(adult);

// filter less than 18 years
let child = nums.filter(num => (num < 18 && num > 0));
console.log(child);