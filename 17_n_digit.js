/**
 * 剑指Offer 面试题17
 * 输出0~n位的所有数字
 * 示例输入：
 * 20
 */

const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.on('line',(line)=>{
  const digit = Number.parseInt(line);
  outputNums(digit);
  rl.close();
})

function outputNums(digit) {
  let num = '0';
  while(num.length!==digit+1){
    console.log(num);
    num = increament(num);
  }
}

function increament(num) {
  let incr;
  let unit = Number.parseInt(num.charAt(num.length-1))
  
  if(num.length===1){
    return (unit+1).toString()
  }

  if(num.charAt(num.length-1)!=='9'){
     return num.slice(0,num.length-1)+(unit+1)
  }
  else{
    let carryEndPosition = carryStartPosition = num.length-2;
    while(num.charAt(carryEndPosition)==='9'){
      carryEndPosition--;
    }
    if(carryEndPosition===-1)
    {
      incr = '1';
      for(let i=0;i<num.length;i++){
        incr+='0';
      }
      return incr;
    }
    else
    {
      incr = num.slice(0,carryEndPosition)+
        (Number.parseInt(num.charAt(carryEndPosition))+1);

      for(let i=carryEndPosition;i<carryStartPosition+1;i++)
        incr+='0'
      
      return incr;
    }
  }
}