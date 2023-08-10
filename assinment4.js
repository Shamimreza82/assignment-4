// function cubeNumber(number) {
//     if (typeof number !== "number") {
//         return "Please enter the number"
//     }
//     const cube = number;
//     const power = 3;
//     const output = Math.pow(cube, power);
//     return output;
// }

// const numbers = 4;
// const cubeNumber1 = cubeNumber(numbers);
// console.log(cubeNumber1);



//---------------------------------------------------------------------------



// function matchFinder(string1, string2) {
//     if (typeof string1 !== "string" || typeof string2 !== "string") {
//         return "please provide valid input(string)"
//     }
//     if (string1.includes(string2)) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }

// const string1 = "John Doe";
// const string2 = "Doe"

// const strings = matchFinder(string1, string2);
// console.log(strings);


//---------------------------------------------------------------------------

// function findAddress(obj) {
//     const street = obj.street || '__';
//     const house = obj.house || '__';
//     const society = obj.society || '__';

//     return street, house, society;
// }

// const obj = {
//     street: 10,
//     house: "15A",
//     society: "Earth Perfect"
// }

// const address = findAddress(obj);
// console.log(address);





//---------------------------------------------------------------------------



// function canPay(changeArray, totalDue) {
//     if (!Array.isArray(changeArray) || typeof totalDue !== "number")
//         return "Please provide valid input"

//     else if (changeArray.length === 0) {
//         return "Your array is empty"
//     }
//     let sum = 0;
//     for (let items of changeArray) {
//         sum = sum + items;
//     }
//     if (sum > totalDue) {
//         return true;
//     }
//     else if (sum < totalDue) {
//         return false;
//     }
// }



// const arr = [];
// const number = 10;

// const canpay1 = canPay(arr, number);
// console.log(canpay1);





//---------------------------------------------------------------------------


// function sortMaker(arr) {
//     if(arr[0] < 0 || arr[1] < 0){
//         return "Invalid Input"
//     }
//     arr.sort((a, b) => b - a);
//     if (arr[0] === arr[1]) {
//         return "equal";
//     } else {
//         return arr;
//     }
// }

// const arr = [4, -2];
// const arrSort = sortMaker(arr);
// console.log(arrSort);





