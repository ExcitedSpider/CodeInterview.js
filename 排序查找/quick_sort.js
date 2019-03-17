/**
 * 快速排序
 */

function quickSort(list) {
  return _quickSort(list,0,list.length-1)
}

function _quickSort(list,start,end) {
  if(list.length<=1) return;

  let part = partition(list, start, end);
  
  if(start<part-1)
    _quickSort(list,start, part-1);
  if(part+1<end)
    _quickSort(list,part+1,end);
}

function partition(list,start,end) {
  let pivot = list[end];
  let p1 = start;
  let p2 = end-1;
  while(p1!=p2){
    while(list[p1]<pivot && p1!=p2) p1++;
    while(list[p2]>pivot && p1!=p2) p2--;
    list.swap(p1,p2);
  }
  if(list[p1]>list[end])
    list.swap(p1,end)
  return p1;
}

Array.prototype.swap = function (i,j) {
  let temp = this[i];
  this[i] = this[j];
  this[j] = temp;
}

let list = [5,3,12,5,6,7,8,3,15,11,9,10]
quickSort(list)
console.log(list);
