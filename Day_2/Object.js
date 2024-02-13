let rectangle = {
    length: 1,
    breadth: 3,

    draw: function(){
        console.log('Rectangle is Drawing...');
    }
}

rectangle.draw();
console.log(rectangle.length);
console.log(rectangle.breadth);

// let recObj1 = new rectangle();  // Error
// recObj1.draw();