var calculator = {
    save: function (newA, newB) {
        this.a = newA;
        this.b = newB;
    }
};

calculator.sum = function(){
    let result = 0;
    return result = this.a + this.b;
}
calculator.multiply = function(){
    let result = 0;
    return result = this.a * this.b;
}

calculator.save(2, 3);
console.log(calculator.sum());
console.log(calculator.multiply());



