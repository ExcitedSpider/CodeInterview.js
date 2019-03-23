/**
 * 剑指Offer 面试题15
 * 数字中1的个数
 * 示例输入：
 * 89
 */

const rl = require('readline').createInterface({
  input:process.stdin,
  output:process.stdout
})
rl.on('line',(line)=>{
  const num = Number.parseInt(line);
  console.log(getNumOf1(num));
  rl.close();
})

function getNumOf1(num) {
  let result = 0;
  while(num){
    result++;
    num = (num-1)&num;
  }
  return result;
}