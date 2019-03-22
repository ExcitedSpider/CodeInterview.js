/**
 * 剑指Offer 面试题14
 * 剪绳子 动态规划解法
 * 输入第一个为长度，第二个为段数
 * 示例输入：
 * 8 3
 */

const rl = require('readline').createInterface({
  input:process.stdin,
  output:process.stdout
})

let ropeLength;

rl.on('line',(line)=>{
  [ropeLength,ropeSeg] = line.split(' ').map((value)=>{
    return Number.parseInt(value);
  });

  console.log(maxProduct(ropeLength,ropeSeg));
  
  rl.close();
})

//我觉得这道题官方解法有问题，只接收了一个length入参
//然而题目要求了要剪成多少段
//原题目描述："给你一段长度为n的绳子，请把绳子剪成m段"
//所以参考的动态规划方法我觉得不能解
//可以用贪婪的方法解出
function maxProduct(ropeLength,ropeSeg) {
  const div = Math.floor(ropeLength/ropeSeg);
  const surplus = ropeLength - div*ropeSeg;

  let result = surplus? div+1:div;
  for(let i=1;i<ropeSeg;i++){
    if(i<surplus){
      result*=(div+1);
    }else{
      result*=div
    }
  }

  return result;
}