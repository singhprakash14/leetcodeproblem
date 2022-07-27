// // Given two integer arrays nums1 and nums2, return an array of their intersection. 
// Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]

var intersect = function(nums1, nums2) {
    let bike=[]
   for(let i = 0;i<nums1.length;i++){
        if(nums2.includes(nums1[i])){
            bike.push(nums1[i])
            let index = nums2.indexOf(nums1[i])
            nums2.splice(index,1)
        }
    }
    
    return bike
};
