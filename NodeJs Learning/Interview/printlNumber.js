const arr= [2,3,5,4,7,8];

function sumOfArrayElement(arr)
{
    let sum =0;
    for(let i=0;i<arr.length;i++)
    {
        sum  = sum+arr[i];
    }

    return sum;
}

let ans  = sumOfArrayElement(arr);
console.log(ans);