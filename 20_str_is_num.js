/**
 * 剑指Offer 面试题20
 * 验证字符串是否符合数字模式
 * 即"[+|-] num [E index | e index]"
 * 示例输入：
 * +12e5
 */

const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.on('line', (line) => {
  const isMatch = (function (line) {
    if(!line){
      return false 
    }
    let state = 0;
    let ptr = 0;
    while (line[ptr]) {
      switch (state) {
        case 0: {
          if (line[ptr] === '+' || line[ptr] === '-') {
            ptr++;
            state = 1;
          } else {
            const numLength = getDemNumLength(line, ptr);
            if (numLength !== 0) {
              ptr += numLength;
              state = 2;
            } else {
              return false;
            }
          }
          break;
        }
        case 1: {
          const numLength = getDemNumLength(line, ptr);
          if (numLength !== 0) {
            ptr += numLength;
            state = 2;
          } else {
            return false;
          }
          break;
        }
        case 2: {
            if (line[ptr] === 'E' || line[ptr] === 'e') {
              state = 3;
              ptr++;
            }
            break;
          }
        case 3:{
          const numLength = getDemNumLength(line, ptr);
          if(numLength!==0){
            ptr+=numLength;
          }else{
            return false;
          }
          break;
        }
      }
    }
    return true;
  })(line)
  console.log(isMatch);
})

//一个子自动机
//检查是否为十进制数，成功返回数字长度，不成功返回0
function getDemNumLength(line, start) {
  let state = 0;
  let ptr = start;
  while (true) {
    switch (state) {
      case 0:
        if (_isDemDigit(line[ptr])) {
          ptr++
        } else if (line[ptr] === '.') {
          state = 1;
          ptr++;
        } else {
          return ptr-start;
        }
        break;
      case 1:
        if (_isDemDigit(line[ptr])) {
          ptr++;
        } else {
          return ptr-start;
        }
    }
  }
  function _isDemDigit(char) {
    return !isNaN(char - 0);
  }
}

