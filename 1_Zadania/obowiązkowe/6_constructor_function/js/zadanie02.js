function Calculator(){
    this.history = [];
}

Calculator.prototype.add = function(num1, num2){
    
    let result = num1 + num2;
    this.history.push(`added ${num1} to ${num2} got ${result}`);
    return result;
}

Calculator.prototype.multiply = function(num1, num2){
    let result = num1 * num2;
    this.history.push(`multiplied ${num1} with ${num2} got ${result}`);
    return result;
}

Calculator.prototype.subtract = function(num1, num2){
    let result = num1 - num2;
    this.history.push(`subtracted ${num1} from ${num2} got ${result}`);
    return result;
}

Calculator.prototype.divide = function(num1, num2){
    let result = num1 / num2;
    this.history.push(`divided ${num1} by ${num2} got ${result}`);
    return result;
}

Calculator.prototype.printOperations = function(){
    for(let i = 0; i < this.history.length; i++){
        console.log(this.history[i]);
    }
}

Calculator.prototype.clearOperations = function(){
    this.history = [];
}

// const cal1 = new Calculator();
// console.log(cal1.add(2, 1));
// console.log(cal1.multiply(2, 1));
// console.log(cal1.subtract(2, 1));
// console.log(cal1.divide(2, 1));

// console.log(cal1.history);
// cal1.printOperations();
// cal1.clearOperations();
// console.log(cal1.history);

