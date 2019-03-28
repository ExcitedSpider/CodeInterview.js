/**
 * 剑指Offer 面试题33
 * 判断一个数字序列是否是可能是某二叉搜索树的后序遍历序列
 * 输入一个数字序列
 * 示例输入：
 * 1 4 3 6 8 7 5
 */

const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.on('line',(line)=>{
  const array = line.split(' ').map(char => Number.parseInt(char));
  console.log(isPostOrder(array, 0, array.length-1));
})

function isPostOrder(array, start, end) {
  if(start >= array.length || end >= array.length) return false;
  if(start >= end) return true;

  const pivot = array[end];
  let seg = -1;
  for(let i=end-1;i>=start;i--){
    if(array[i]<pivot){
      seg = i;
      break;
    }
  }

  if(seg===-1){
    return isPostOrder(array, start, end-1);
  }

  for(let i=0;i<seg;i++){
    if(array[i]>pivot)
      return false;
  }
  
  return isPostOrder(array, start,seg) && isPostOrder(array, seg+1, end);
}