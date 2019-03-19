/**
 * 面试题11
 * 旋转数组的最小数字
 */
const readline = require('readline');

const rl = readline.createInterface({ 
  input: process.stdin,
  output: process.stdout
});

rl.on('line',(line)=>{
  let data = line.split(" ").map((value)=>{
    return Number.parseInt(value);
  })

  console.log(getMin(data));
  rl.close();
})

function getMin(list) {
  if(list.length<=0) return;
  if(list.length==1) return list[0];

  let start = 0;
  let end = list.length-1;

  let first = list[0];
  while(start!=end){
    let mid = Math.floor((start+end)/2);
    if(list[mid]<first){
      end = mid;
    }else if(list[mid]>=first){
      start = mid + 1;
    }
  }

  return list[start];
}