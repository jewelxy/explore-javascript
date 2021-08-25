class Hero{
    constructor(){
        this.heroName = "Jewel";
    }
}
class Heroine extends Hero{
    constructor(heroine){
        super();
        this.heroineName = heroine;
    }
}

const couple = new Heroine("Tisha");
console.log(couple);