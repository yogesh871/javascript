
// kadane's Algorithm

function kadane(arr) {
    let cursum = 0;
    let maxsum = arr[0];
    for (let i = 0; i < arr.length; i++) {
        cursum += arr[i];

        if (cursum > maxsum) {
            maxsum = cursum;
        }
        else if (cursum < 0) {
            cursum = 0;
        }
    }
    return maxsum;
    
}

let arr = [-1, 2, -3, -2, 5, 4, 2, -3];
console.log(kadane(arr));  

