function commonInArray(ar1,ar2)
{
    const result = ar1.filter((ele)=>{
        return ar2.includes(ele) })
     return result;   
}

let arr1 = [1,2,3,4,5]
let arr2 = [3,2,4,5,6,7]

console.log(commonInArray(arr1,arr2))