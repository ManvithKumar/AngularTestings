function commonInArray(ar1,ar2)
{
    const result = ar1.filter((ele)=>{
        return ar2.includes(ele) })
     return result;   
}

let arr1 = [1,2,3,4,5]
let arr2 = [3,2,4,5,6,7]

console.log(commonInArray(arr1,arr2))

function calculateFactorial() {
    // Get the number from the input field
    const number = parseInt(document.getElementById('number').value);

    // Calculate the factorial
    let factorial = 1;
    for (let i = 1; i <= number; i++) {
        factorial *= i;
    }

    // Display the result
    document.getElementById('result').innerText = `The factorial of ${number} is: ${factorial}`;
}
