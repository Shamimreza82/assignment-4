// function findAddress(obj) {
   
//         const findAdd = Object.values(obj);
//         return findAdd;  

// }

// const obj = {
//     street: 10,
//     house: "15A",
//     society: "Earth Perfect"
// }

// const address = findAddress(obj); 
// console.log (address); 



function findAddress(obj) {
    const findAdd = Object.values(obj)
    .map(value => value === undefined || value === "__" ? "__" : value);
    return findAdd;
}

const obj = {
    street: 10,
    house: "--",
    society: "Earth Perfect"
    
}

const address = findAddress(obj); 
console.log(address);

