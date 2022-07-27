
// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Input: nums = [1,2,3,1]
// Output: true



var containsDuplicate = function(nums) {
    
    for(i=0;i<nums.length-1;i++)
    {
         // Arrays.sort(nums);
        if(nums[i]==nums[i+1])
        return true;
    }
    return false;

};
