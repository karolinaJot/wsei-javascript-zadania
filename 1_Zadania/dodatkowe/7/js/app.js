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