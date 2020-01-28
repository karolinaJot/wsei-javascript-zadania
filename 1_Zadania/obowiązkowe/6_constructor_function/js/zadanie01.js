var Robot = function (name) {
    this.name = name;
    this.isFunctional = true;
}

let robot1 = new Robot('Adi');
console.log(robot1);

Robot.prototype.sayHi = function (toWho) {
    if (this.isFunctional === true) {
        console.log("Robot " + this.name + " greets " + toWho);
    }
    else {
        console.log("Robot " + this.name + "is broken");
    }
};

robot1.sayHi('Tom');

Robot.prototype.changeName = function (newname) {
    console.log("Robot " + this.name + " changes name to " + newname);
    this.name = newname;
};

robot1.changeName('Alexa');
console.log(robot1.name);

Robot.prototype.fixIt = function () {
    this.isFunctional = true;
    console.log("Robot " + this.name + " was fixed");
};

robot1.fixIt();

let robot1 = new Robot('Adi');
console.log(robot1);
let robot2 = new Robot('Wera');
let robot3 = new Robot('Alex')
