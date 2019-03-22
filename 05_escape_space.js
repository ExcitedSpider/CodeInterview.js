/**
 * 剑指Offer面试题5
 * 替换空格
 */

var string = "I want to go to school.";

function escapeSp(string) {
  //因为JS的字符串是常量，先转换成数组来处理
  let charArr = Array.from(string);
  let originLength = charArr.length;
  let spNum = 0;
  for(let index in charArr){
    if(charArr[index]==' '){
      spNum ++;
    }
  }
  let newLength = originLength + spNum*2;
  for(let i = originLength-1, j = newLength-1;i>=0;i--,j--){
    if(charArr[i]!=' '){
      charArr[j]=charArr[i];
    }else{
      charArr[j-2]='%';
      charArr[j-1]='2';
      charArr[j]='0';
      j=j-2;
    }
  }

  //将数组重组为字符串
  let escapeString = '';
  charArr.forEach((char)=>{
    escapeString+=char;
  })
  return escapeString;
}

console.log(escapeSp(string));
