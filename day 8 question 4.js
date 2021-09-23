class uber{
    constructor(kilometres,ratePerKM){
        this.kilometres =kilometres;
        this.ratePerKM = ratePerKM;
    }
    calc(){
        return this.kilometres*this.ratePerKM;
    }
}

const fair1 = new uber(25,30);