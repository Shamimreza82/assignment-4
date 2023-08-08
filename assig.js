
// problem (Solved)

function cubeNumber(number) {
    if (typeof number !== "number"){
        return "Please provide a number"
    }

    const cube = number; 
    const power = 3; 
    const output = Math.pow(cube, power)
    return output; 


}

const numbers = "3"; 
const cubeNumber1 = cubeNumber(numbers); 
console.log(cubeNumber1);


//--------------------------------------------------------------------------------------

