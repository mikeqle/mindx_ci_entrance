function allLongestStrings(inputArray) {
    let longestStringLength = 0;
    let outputArray = [];

    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i].length < longestStringLength) {
            continue;
        } else if (inputArray[i].length > longestStringLength) {
            // if element is a longer string than longestStringLength, update array and longestStringLength
            longestStringLength = inputArray[i].length;
            outputArray = [inputArray[i]];
        } else {
            // if element has equal length with longestStringLength, append outputArray
            outputArray.push(inputArray[i]);
        }
        
    }
    // console.log(longestStringLength);
    // console.log(outputArray);
    return outputArray;
}

let testArray = ["BINH", "HUNG", "PHUOC", "CAO", "KHANH"];
let resultArray = allLongestStrings(testArray);
console.log(resultArray)

