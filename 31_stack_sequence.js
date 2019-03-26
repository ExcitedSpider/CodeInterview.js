/**
 * 剑指Offer 面试题31
 * 栈的压入、弹出序列
 * 第一行输入压入序列，第二行输出弹出序列
 * 示例输入
 * 1 2 3 4 5
 * 5 4 3 2 1
 */

const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

{
  let $line = 0
  let pushSeq;
  rl.on('line',(line)=>{
    switch($line++){
      case 0:
        pushSeq = line.split(" ");
        break;
      case 1:
        const popSeq = line.split(" ");
        console.log(isMatch(pushSeq,popSeq));
        $line=0;
        //rl.close();
        break;
    }
  })
}

Array.prototype.top = function () {
  return this[this.length-1];
}

function isMatch(pushSeq, popSeq) {
  if(pushSeq.length!==popSeq.length) return false;
  if(pushSeq.length===1 && pushSeq[0]==='') return false; 
  if(pushSeq.length===1) return pushSeq[0]===popSeq[0];

  const stack = [];
  let popPtr = 0, pushPtr = 0;
  while(pushPtr!==pushSeq.length){
    stack.push(pushSeq[pushPtr]);
    while(stack.top()===popSeq[popPtr] && stack.length!==0){
      stack.pop();
      popPtr++;
    }
    pushPtr++;
  }

  while(stack.top()===popSeq[popPtr] && stack.length!==0){
    stack.pop();
    popPtr++;
  }

  if(pushPtr===popPtr) return true;
  return false;
}
