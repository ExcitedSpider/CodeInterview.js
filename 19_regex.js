/**
 * 剑指OFFER 面试题19
 * 实现一个包含'.'和'*'的正则匹配器
 * 第一行输入待匹配串，第二行输入模式
 * 示例输入：
 * abcdef
 * b.d
 */

const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

let $line = 0, string, pattern;

rl.on('line',(line)=>{
  switch($line++){
    case 0:
      string = line;
      break;
    case 1:
      pattern = line;
      console.log(match(string,pattern));
      rl.close();
      break;
  }
})

function match(string, pattern) {
  if(string===''){
    if(pattern===''){
      return true;
    }
    return false;
  }

  if(string[0]===pattern[0] || pattern[0]==='.'){
    if(pattern[1]==='*' && string[1]===pattern[0]){
      return match(string.slice(1), pattern) || match(string.slice(1),pattern.slice(2))
    }else
      return match(string.slice(1), pattern.slice(1)) || match(string.slice(1), pattern);
  }
  else{
    return match(string.slice(1), pattern)
  }
}

