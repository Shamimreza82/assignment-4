// function cubeNumber(number) {
//     if (typeof number !== "number") {
//         return "Please provide a number"
//     }
//     const cube = number;
//     const power = 3;
//     const output = Math.pow(cube, power)
//     return output;
// }

// const numbers = "3";
// const cubeNumber1 = cubeNumber(numbers);
// console.log(cubeNumber1); 



//---------------------------------------------------------------------------



// function matchFinder(string1, string2){
//     if (typeof string1 !== "string" || typeof string2 !== "string"){
//         return "please provide valid input"
//     }

//     if (string1.includes(string2)){
//         return true; 
//     }
//     else {
//         return false; 
//     }
//  }


// const string1 = "John Doe"; 
// const string2 = "ohn"

// const strings = matchFinder(); 
// console.log(strings);


//---------------------------------------------------------------------------

// function findAddress(obj) {

//     if (obj.street === undefined) {
//         obj.street = '__';
//       }

//       if (obj.house === undefined) {
//         obj.h = '__';
//       }
//     // const findAddress = Object.values(obj);
//     return obj; 

// }


// const obj = {
//     street: 10,
//     house: "15A",
//     society: "Earth Perfect"
// }

// const address = findAddress(obj); 
// console.log (address); 


//---------------------------------------------------------------------------



// function canPay(changeArray, totalDue) {
//     if (!Array.isArray(changeArray) || typeof totalDue !== "number")
//         return "Please provide valid input"

//     else if (changeArray.length === 0) {
//         return "Your array in empty"
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

// const arr = [1,5,5];
// const number = 10;

// const canpay1 = canPay(arr, number);
// console.log(canpay1);





//---------------------------------------------------------------------------