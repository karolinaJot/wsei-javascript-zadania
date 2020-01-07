// zadanie 0

const car = {
    brand: 'Fiat',
    color: 'Czerwony',
    numberOfKilometers: 0,
    printCarInfo: function(){
        console.log(`${this.color} ${this.brand}, ${this.numberOfKilometers}`);
    },
    drive: function(km){
        this.numberOfKilometers += km;
    }
}

car.printCarInfo();
car.numberOfKilometers(20);
car.printCarInfo();