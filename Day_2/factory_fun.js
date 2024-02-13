function CreateRectangle(len, bred){
    return rectangle = {
        lenght: len,
        breadth: bred,

        draw(){
            console.log('Drawing');
        }
    }
}

let obj1 = new CreateRectangle(4, 7);
obj1.draw();
console.log(obj1.lenght);
console.log(obj1.breadth);

let obj2 = new CreateRectangle(10,20);
obj2.draw();
console.log(obj2.lenght);
console.log(obj2.breadth);
