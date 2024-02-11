let num = 10;

for(let row=0; row<num; row++){
    for(let col=0; col<row+1; col++){
        process.stdout.write('*');
    }
    console.log()
}