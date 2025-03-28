
let removeDuplicates = function (nums) {

    if (nums.length <= 1) {
        return nums.length;
    }
     
    else{
    let k = [];

    for (let i = 1; i < nums.length; i++) {
        if ( nums[i] != nums[k - 1]) {
            nums[k] = nums[i];
            k++;
        }
    }
    return k;
}
};
let nums = [1, 1, 1, 1, 2, 2 ,2 ,3]

console.log(removeDuplicates(nums)) 