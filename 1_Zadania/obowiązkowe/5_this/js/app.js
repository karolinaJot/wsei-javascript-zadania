// zadanie 0
let car = {
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
car.drive(20);
car.printCarInfo();

// zadanie 1
car.service = ['02.04.1999', '02.04.2000', '02.04.2001'];
car.addService = function(date){
    this.service.push(date);
}
car.printAllServices = function(){
    for(let i = 0; i < this.service.length; i++){
        console.log(this.service[i]);
    }
}

car.addService('02.04.2002');
car.printAllServices();


// zadanie 3
let stairs = {
    step: 0,
    up: function(){
        this.step++;
    },
    down: function(){
        this.step--;
    },
    printStep: function(){
        console.log(this.step);
    }
}

