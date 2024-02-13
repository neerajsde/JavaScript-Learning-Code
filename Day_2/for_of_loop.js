let rectangle = {
    name: 'Neeraj',
    age: 21,
    color: 'fair',
    qualification: 'BCA',

    fun: function(){
        console.log('This is Method');
    }
}

// for of loop
for(let key of Object.entries(rectangle)) {
    console.log(key);
}

if('name' in rectangle){
    console.log('Persent');
}
else{
    console.log('Absent');
}