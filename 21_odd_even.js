/**
 * 剑指Offer 面试题21
 * 调整数组顺序使奇数在偶数前面
 */
function arrangeArray(arr) {

  if(arr.length<=1) return;

  let ptr1 = 0;
  let ptr2 = arr.length - 1;

  while(ptr1!==ptr2){
    while(_isOdd(arr[ptr1])&&ptr1!==ptr2){
      ptr1++;
    }
    while(!_isOdd(arr[ptr2])&&ptr1!==ptr2){
      ptr2--;
    }
    if(ptr1!==ptr2){
      _swap(arr,ptr1,ptr2);
    }
  }

  function _swap(arr, pos1, pos2) {
    const temp = arr[pos1];
    arr[pos1]=arr[pos2];
    arr[pos2] = temp;
  }
  
  function _isOdd(num) {
    if(isNaN(num))
      return false;
    if(num%2!==0){
      return true;
    }else{
      return false;
    }
  }
}

const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
arrangeArray(arr);
console.log(arr);
