// Function Assignment

let stand = function walk(){
    console.log('I\'m Walking...');
}

stand();

// walk(); // Wrong Output


// anonymous function assignment
let stand2 = function(){
    console.log('walking..');
}

stand2();
let jump = stand2;
jump();