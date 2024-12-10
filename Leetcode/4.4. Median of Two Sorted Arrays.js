var findMedianSortedArrays = function (nums1, nums2) {
  let arr = [];
  let i = 0;
  let j = 0;

  while (i < nums1.length || j < nums2.length) {
    if (j >= nums2.length || nums1[i] < nums2[j]) {
      arr.push(nums1[i]);
      i++;
    } else {
      arr.push(nums2[j]);
      j++;
    }
  }
  const mid = Math.floor(arr.length / 2);
  console.log(`mid =${mid}`)
  if (arr.length % 2 !== 0) {
    return arr[Math.floor(mid)];
  }else{
    console.log(`arr[mid] = ${arr[mid]} , arr[mid-1] = ${arr[mid-1]}`)
    return (arr[mid] + arr[mid-1]) / 2;
  }
};

console.log(findMedianSortedArrays([], [2,3]));
