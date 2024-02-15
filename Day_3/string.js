let lastName = 'Babbar';

console.log(lastName.length);
console.log(lastName.includes('Ba'));  // -> true
console.log(lastName.startsWith('Ba'));  // -> true
console.log(lastName.startsWith('BaB')); // -> false
console.log(lastName.endsWith('ar')); // -> true
console.log(lastName.indexOf('b')); // 2-> index
console.log(lastName.indexOf('ar')); // 4-index
console.log(lastName.toUpperCase());  // BABBAR
console.log(lastName.toLowerCase()); // babbar

let firstName = '  Love';

console.log(firstName);
console.log(firstName.trim()); // remove withspaces
console.log(firstName.replace('Love', 'Vijay'));

// replace
console.log(firstName.trim().replace('Love', 'Neeraj'), lastName.replace('Babbar', 'Prajapati'));

// We can write - Object
let str = new String('Hello');

console.log(str);

let message = 'He is very very good.';
console.log(message);
console.log(message.split(' '));
console.log(message);
console.log(message.split(' ').join('_+_'));