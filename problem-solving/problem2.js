function sumArray(array) {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
        total += array[i];
    }
    return total;
}

function alternatingSums(inputArray) {
    let oddArray = [];
    let evenArray = [];
    for (let i = 0; i < inputArray.length; i++) {
        if (i % 2 === 0) {
            // First team is evenArray (0 indexing)
            evenArray.push(inputArray[i]);
        } else {
            // Second team is oddArray
            oddArray.push(inputArray[i]);
        }
    }
    // console.log(sumArray(evenArray));
    // console.log(sumArray(oddArray));
    return [sumArray(evenArray), sumArray(oddArray)]
}

let testArray = [60, 40, 55, 75, 64]
let resultArray = alternatingSums(testArray);
console.log(resultArray);