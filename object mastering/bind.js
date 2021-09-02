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
            console.log(this);
            this.salary -= amount;
    }
}
const heroPerson = {
    firstName : 'Hero',
    lastName : 'Balam',
    salary : 25000,
}
const friendlyPerson = {
    firstName : 'Hero',
    lastName : 'Golam',
    salary : 5000,
}

const heroBillCharge = normalPerson.chargeBill.bind(heroPerson);

heroBillCharge(2000);
console.log(heroPerson.salary);