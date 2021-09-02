const normalPerson = {
    firstName : 'Jewel',
    lastName : 'Rana',
    salary : 15000,
    getFullName : function(){
        const suraName = this.firstName;
        const authenticName = this.lastName;
        console.log(suraName,authenticName);
    },
    chargeBill : function(amount){
            this.salary -= amount;
    }
}
normalPerson.chargeBill(150);
console.log(normalPerson.salary);
