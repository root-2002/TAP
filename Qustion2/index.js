function missingNumber(nums) {
    const numberLength = nums.length;
    let expectedSum = (numberLength * (numberLength + 1)) / 2;

    let actualSum = 0;
    for (let i = 0; i < nums.length; i++) {
        actualSum += nums[i];
    }

    return expectedSum - actualSum;
}


const nums1 = [3, 0, 1];
console.log(missingNumber(nums1)); // Output: 2


const nums2 = [9, 6, 4, 2, 3, 5, 7, 0, 1];
console.log(missingNumber(nums2)); // Output: 8


const nums3 = [0, 1];
console.log(missingNumber(nums3)); // Output: 2
