// fetch API
let a = fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(response => response.json()).then(json => console.log(json));

// Post Call API
let options = {
    method: 'POST',
    body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
    }),
    headers:{
        'content-type' : "application/json; charset = UTF-8"
    }
}

let getAPI = fetch('https://jsonplaceholder.typicode.com/todos', options);
getAPI.then(response => response.json()).then(json => console.log(json));


// Clouser
const add = (function () {
    let counter = 0;
    return function () {counter += 1; return counter;}
})();
function MyFunction(){
    document.getElementById('demo').innerHTML = add();
}