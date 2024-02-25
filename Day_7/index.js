
// let merePromise = new Promise(function(reslove, reject){
//     setTimeout(function(){
//         console.log('I am function inside here');
//         reslove(2233)
//     }, 5000);
//     // reject(new Error('Please try This'));
// });


// merePromise.then(((value) => {
//     alert('Promise Fullfilled '+value);
// }));

// merePromise.catch(() => {
//     alert('Something went wrong.');
// });

// console.log('Hello Neeraj');


// async function printName(){
//     setTimeout(function(){
//         console.log('This is asyn function');
//     }, 10000);
//     return 'Neeraj Prajapati';
// }

// console.log(printName());
// console.log('Hello Ji');


async function slove(){
    let promise1 = new Promise(function(reslove, reject){
        setTimeout(function(){
            console.log('Hello Ji Promise-1 fullfilled');
            reslove(1122);
        }, 10000);
    });
    
    let promise2 = new Promise(function(reslove, reject){
        setTimeout(function(){
            console.log('Hello Ji Promise-2 fullfilled');
            reslove(2233);
        }, 20000);
    });

    console.log("I'm in slove inside");
    let x = await promise1;
    let y = await promise2;
    console.log([x, y]);
    console.log([promise1, promise2]);
}

slove();
console.log('This is JavaScript file.');