let myDiv = document.getElementById('wrapper');

let newH1 = document.createElement('h2');
newH1.textContent = 'Hello Ji';
myDiv.appendChild(newH1);


// create div2
var div2 = document.createElement('div');
div2.setAttribute('id', 'container');
myDiv.insertAdjacentElement("afterEnd", div2);

for(let i=1; i<=50; i++){
    let p = document.createElement('p');
    p.textContent = "This is para - "+i;
    p.setAttribute('id', 'para-'+i);
    p.style.cursor = 'pointer';


    div2.appendChild(p);
}
// document.body.appendChild(div2);

// Events
function change_color(){
    para2.style.backgroundColor = 'red';
}

function update_text(){
    para2.style.backgroundColor = 'black';
    para2.style.color = 'red';
    console.log('Removed event listner...')
}

var para2 = document.getElementById('para-2');
para2.addEventListener('click', change_color);
para2.removeEventListener('click', update_text);

function say_hi(){
    console.log('Say Hi....');
}
div2.addEventListener('click', say_hi);