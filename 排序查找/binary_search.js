/**
 * 二分搜索
 */

var list = [1,3,4,7,11,14,15,19,22,23,25]

function binary_search(wanted, list) {
  if(list.length<=0) return -1;
  let low = 0;
  let high = list.length-1;
  while(low<=high){
    let mid = Math.floor((low+high)/2);
    if(list[mid]===wanted){
      return mid;
    }
    if(list[mid]<wanted){
      low = mid+1;
    }else{
      high = mid-1;
    }
  }
  return -1;
}

console.log(binary_search(1,list));
