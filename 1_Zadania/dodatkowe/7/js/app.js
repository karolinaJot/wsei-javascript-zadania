// zadanie 1
function getNumber(number, array) {
    let result = false;

    for (let i = 0; i < array.length; i++) {
        if (number === array[i]) {
            result = true;
            break;
        }
    }

    return result;
}

console.log(getNumber(2, [33, 54, 2, 1, 4, 100]));

// zadanie 2
function createIdentityMatrix(rows, columns) {
    let identityMatrix = [];
    let index = 0;

    for (let i = 0; i < rows; i++) {
        let subArray = [];

        for (let j = 0; j < columns; j++) {
            if (j === index) {
                subArray.push(1);
            } else {
                subArray.push(0);
            }
        }
        identityMatrix.push(subArray);
        index++;
        subArray = [];
    }

    return identityMatrix;
}

console.log(createIdentityMatrix(4, 4));

// zadanie 1 -dodatkowe
function addTheSameNumbers(number, array) {
    let result = null;
    for (let i = 0; i < array.length; i++) {
        if (number === array[i]) {
            result += array[i]
        }
    }
    return result;
}

console.log(addTheSameNumbers(7, [4, 7, 24, 7, 0, 10]));
console.log(addTheSameNumbers(9, [33, 54, 2, 1, 9, 100]));
console.log(addTheSameNumbers(0, [33, 0, 2, 0, 9, 0]));
console.log(addTheSameNumbers(43, [6, 0, 2, 2, 3, 46]));

// zadanie 2 -dodatkowe
function factors(number) {
    const result = [];
    if (number <= 0) {
        result;
    } else {
        let factor = number;
        for (let i = 1; i <= number; i++) {
            if (number % factor === 0) {
                result.push(factor);
            }
            factor--;
        }
    }
    return result;
}

console.log(factors(-4));

// zadanie 3 -dodatkowe
function getMissingElement(array) {
    let missingElement = null;
    let index = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] === index) {
            index++;
        } else {
            missingElement = index;
        }
    }
    return missingElement;
}
console.log(getMissingElement([1, 2, 3, 4, 5, 6, 7]));
console.log(getMissingElement([6, 7, 8, 10, 11, 12, 13, 14, 15]));
console.log(getMissingElement([-4, -3, -2, 0, 1, 2, 3, 4]));


// zadanie 4 - dodatkowe
function getLastNumbers(number, array) {
    const lastNumbers = [];

    if (number === 'undefined' || typeof (number) !== 'number') {
        return lastNumbers;
    } else {
        let index = array.length - number;
        for (let i = 0; i < array.length; i++) {
            if (i === index) {
                lastNumbers.push(array[i]);
                index++
            }
        }
    }
    return lastNumbers;
}
console.log(getLastNumbers(2, [1, 2, 3, 4, 5, 6, 7]));
console.log(getLastNumbers(4, [6, 7, 8, 10, 11, 12, 13, 14, 15]));
console.log(getLastNumbers([-4, -3, -2, 0, 1, 2, 3, 4]));
console.log(getLastNumbers('ala', [-4,-3,-2,0,1,2,3,4]));