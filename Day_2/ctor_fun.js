function Rectangle(len, bred){
    this.length = len;
    this.breadth = bred;

    this.draw = function(){
        console.log('Drawing Rectangle...');
    }
}

let recObj1 = new Rectangle(10, 20);
console.log(recObj1.length);
console.log(recObj1.breadth);
recObj1.draw();

recObj1.color = 'Yellow';
console.log(recObj1.color);
delete recObj1.color;
console.log(recObj1.color);

let recObj2 = new Rectangle(4, 5);
console.log(recObj2.length);
console.log(recObj2.breadth);
recObj2.draw();