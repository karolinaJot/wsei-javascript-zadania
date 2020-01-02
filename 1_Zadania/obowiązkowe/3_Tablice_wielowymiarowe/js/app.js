
var task1Array = [
    [2, 3],
    ["Ala", "Ola"],
    [true, false],
    [5, 6, 7, 8],
    [12, 15, 67]
];


var task2Array = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
];


// zadanie 0
var arr = [
    [11, 12],
    [42, 2],
    [-4, -120],
    [0, 0],
    [1, 34],
    ];

function checkArray(array2D){
  const resultArray = [];
  for(let i = 0; i < array2D.length; i++){
      let check = true;
      for(let j = 0; j < array2D[i].length; j ++){
          if(array2D[i][j] % 2 != 0) {
            check = false;
            break;
           }
      }
      resultArray.push(check);
  }  
  return resultArray;
}
console.log(checkArray(arr));

// zadanie 1
//1.1
console.log(task1Array[3][2]);

//1.2
console.log(task1Array[1].length);

//1.3
console.log(task1Array[4][2]);

// zadanie 2
//2.1
var task2Array = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
];

for(let i = 0; i < task2Array.length; i++){
    console.log(task2Array[i]);
}

//2.2
for(let i = 0; i < task2Array.length; i++){
    console.log(task2Array[i].length);
}

//2.3 -działa
for(let i = 0; i < task2Array.length; i++){
    for(let j = 0; j < task2Array.length; j++){
        console.log(task2Array[i][j]);
    }
}

// zadanie 3
function print2DArray(array2D){
    for(let i = 0; i < array2D.length; i++){
        for(let j = 0; j < array2D.length; j++){
            console.log(array2D[i][j]);
        }
    }
}

// zadanie 4
const array = [
    [99, 98, 97],
    [89, 88],
    [79],
    [69, 68, 67, 66]
];

print2DArray(array);

// zadanie 5
function create2DArray(rows, columns){
    const result2DArray = [];
    let counter = 0;
    for(let i = 0; i < rows; i++){
        const secondArray = [];
        for(let j = 0; j < columns; j++){
            secondArray.push(counter);
            counter++;
        }
        result2DArray.push(secondArray);
    }
    return result2DArray;
}

console.log(create2DArray(4,4));




