let courses = [
    {no: 1, firstName: 'Love'},
    {no: 2, firstName: 'Vijay'},
    {no: 3, firstName: 'Neeraj Prajapati'}
];

console.log(courses);


// callback Function
let c = courses.find(function(course){
    return course.firstName == 'Vijay';
});
console.log(c);

// arrow function
let ar = courses.find(course => course.firstName === 'Love');
console.log(ar);
let ar2 = courses.find(course => course.no === 3);
console.log(ar2);


// Remove Elements
courses.pop();  // form end
console.log(courses);

courses.shift();  // from begning
console.log(courses);



courses.splice(0, 1); // (index, no of elements)

console.log(courses);