// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.
// Merge nums1 and nums2 into a single array sorted in non-decreasing order.
// The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
// The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.


var merge = function(nums1, m, nums2, n) {
    let re1=0
    let re2=0
    const res=[]
    for(i=0;i<m+n;i++){
 if(re1<m&&re2<n&& nums1[re1]<=nums2[re2]){
            res.push(nums1[re1])
            re1++
            
        }else if(re1<m&&re2<n && nums1[re1]>=nums2[re2]){
            res.push(nums2[re2])
            re2++
        }else if(re1<m){
             res.push(nums1[re1])
            re1++
        }
           else{
            res.push(nums2[re2])
            re2++;
        }
    }
    
      for(let i=0;i<m+n;i++){
         nums1[i]=res[i]
    }
    
};