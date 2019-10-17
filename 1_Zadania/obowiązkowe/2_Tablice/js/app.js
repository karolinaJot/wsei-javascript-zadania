
//zadanie 0
const distFromAvarage = (arr) => {
    let avg;
    let sum = 0;
    arr.forEach(item => {
        sum += item;
    })

    avg = sum / arr.length;
    let newArr = [];

    arr.forEach(item => {
        newArr.push(item - avg);
    })

    console.log(newArr);
    return newArr;
}

distFromAvarage = [1,2,3,4,5];

//zadadnie 1

const fruits = ["jabłko", "gruszka", "truskawka", "śliwka"];
console.log(fruits[0]);
console.log(fruits[fruits.length - 1]);

for (i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}



//zad3
function printTable(array){
    for(i = 0; i > array.length; i++){
        console.log(array[i]);
    }
}


//zad4
function multiply(array){
    let sum = 1;
    for(var i = 0; i < array.length; i++){
        sum *= array[i];
    }
    console.log(sum);
    return sum;
}

multiply([1,2,3,4,5,6,7]);

//zad5
function getEvenAvarage (array){
    let evenSum = 0;
    let evenCounter = 0;
    for(let i = 0; i < array.length; i++){
        if (array[i] % 2 == 0){
            evenSum += array[i];
            evenCounter++;
        }
    }

    let evenAvg = evenSum / evenCounter;
    if (evenCounter == 0) {
        return null;
    }
    else {
        return evenAvg;
    }
}

getEvenAvarage([1,2,3,4,5,6,7]);

//zad6
function sortArray(array){
    array.sort((a, b) => a-b);
    console.log(array);
    return array;
}

sortArray([145, 11, 3, 64, 4, 6, 10]);

// zad7

function addArrays(array1, array2){
    const result = [];
    let index = 0;
    for (; index < array1.length; index++) {
        if(index < array2.length){
            result[index] = array1[index] + array2[index];
        }
        else{
            result[index] = array1[index];
        }
    }
    for(; index < array2.length; index++){
        result[index] = array2[index];
    }
    
    return result;
}

const arr1 = [8,3,22];
const arr2 = [1,3,2];

console.log(addArrays(arr1, arr2));



