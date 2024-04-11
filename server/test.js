
    // function print2largest(arr,n){
    //     let arr2 = arr.sort((a,b)=>{
    //         return b-a 
    //     })       
    //     console.log(arr2[1])
    //     return arr2[1]
       
    // }

    // const arr = [12, 35, 1 ,10, 34, 1]

    // print2largest(arr,6)


    function isPrime(num)
    {
        if(num < 2)
        {
            return false
        }
        for(let i =2;i<=Math.sqrt(num);i++)
        {
            if(num % i === 0)
            {
                return false
            }
        }
        return true
    }

    function generatePrimeNumbers(start,end)
    {
        primeList =[];

        for(let i = start;i<= end;i++)
        {
            if(isPrime(i))
            {
                primeList.push(i)
            }
        }
        return primeList;
    }

    console.log(generatePrimeNumbers(10,20))