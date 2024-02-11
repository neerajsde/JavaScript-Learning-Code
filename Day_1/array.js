// 1D Array
let names = ['Vijay', 'Nitin', 'Karan', 'Neeraj', 'Rohan'];

// for(let i=0; i<names.length; i++){
//     console.log(i, '->', names[i]); 
// }

// 2D Array
let userInfo = [['Vijay',20, 90, 290],['Karan',28],['Neeraj', 21], ['Sohan', 30]];
// Traverse 2D Array 
for(let i=0; i<userInfo.length; i++){
    for(let j=0; j<userInfo[i].length; j++){
        console.log(userInfo[i][j]);
    }
    // console.log();
}

userInfo[4] = ['Nitin', 26];
console.log(userInfo); 