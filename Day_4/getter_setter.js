function Customer(id, fname, lname, mobileNo){
    this.cusId = id;
    this.firstName = fname;
    this.lastName = lname;
    this.mobileNo = mobileNo;

    this.display = function(){
        console.log(`Cus_ID: ${this.cusId} | cus_name: ${this.firstName} ${this.lastName} | mobile_no: ${this.mobileNo}`);
    }

    this.getName = function(){
        return `${this.firstName} ${this.lastName}`;
    }

    this.setName = function(name){
        const newName = name.split(' ');
        this.firstName = newName[0];
        this.lastName = newName[1];
    }
}

let cus1 = new Customer(101, 'Mohan', 'Kumar', 123457890);
cus1.display();

let fullNmae = cus1.getName(); // getter
console.log(fullNmae);

cus1.setName('Karan Kumar'); // setter
cus1.display();