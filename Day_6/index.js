// let t1 = performance.now()
// for(let i=1; i<1000; i++){
//     let x = document.createElement('p');
//     x.textContent = 'this is para '+i;
//     document.body.appendChild(x);
// }
// let t2 = performance.now();
// console.log(t2-t1);


// more than optimise
// let myDiv = document.createElement('div');
// for(let i=1; i<=100; i++){
//     var para = document.createElement('p');
//     para.textContent = "This is para "+i;
//     para.setAttribute('id', 'para-'+i)
//     myDiv.appendChild(para);
// }
// document.body.appendChild(myDiv);
// myDiv.style.cssText = 'width: 300px; background-color: red; font-size: 1.5rem; color: white; text-align: center; margin: 0 auto; padding: 1rem 0';


// // Optimise code 
// let myDiv = document.createDocumentFragment();
// for(let i=1; i<=200; i++){
//     let para = document.createElement('p');
//     para.textContent = i+' This is para...';
//     myDiv.appendChild(para);
// }
// document.body.appendChild(myDiv);

// let content = document.getElementsByTagName('p');
// console.log(content);

let myDiv = document.createElement('div');
myDiv.setAttribute('class', 'box')

function addAnchorTag(link){
    var div2 = document.createElement('div');
    let para = document.createElement('a');
    para.textContent = 'Visit my Portfolio';
    para.setAttribute('href',link);
    para.style.cssText = 'font-size: 20px; color: white; background-color: green; padding: 1rem 2rem; border-radius: 10px;';
    div2.appendChild(para);
    myDiv.appendChild(div2);
    document.body.appendChild(myDiv);
}

function addImage(img_path){
    let img = document.createElement('img');
    img.setAttribute('src', img_path);
    img.style.width = '300px';
    myDiv.appendChild(img);
    document.body.appendChild(myDiv);
}



addAnchorTag('https://neeraj-prajapati-portfolio.netlify.app/');
addAnchorTag('https://neeraj-prajapati-portfolio.netlify.app/');
addImage("car.jpg");

myDiv.style.cssText = 'display: flex; flex-direction: row; gap: 5rem; justify-content: space-evenly; align-items: center';


// set timeout fun
setTimeout(function(){
    console.log('Hello Guy\'s');
}, 5000);

// delay
function delayedLoop(start, end, delay){
    if(start < end){
        console.log('Iteration: '+start);
        

        setTimeout(function(){
            delayedLoop(start+1, end, delay);
        }, delay);
    }
}