/**
 * 剑指Offer 面试题13
 * 机器人的运动范围
 * 示例输入：
 * 15 20
 * 9
 */

const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

let line$ = 0;

let m, n;
let k;
rl.on('line',(string)=>{
  switch(line$++){
    case 0:
      [m,n] = string.split(" ").map((value)=>{
        return Number.parseInt(value);
      }); 
      break;
    case 1:
      k = Number.parseInt(string);
      console.log(getMovements(m,n,k));
      rl.close();
      break;
  }
})

function getMovements(m,n,k) {
  const visited = [];
  for(let i=0;i<m;i++){
    visited[i]=new Array();
  }
  let avaliableBlock = 0;
  (function walk(position) {
    const [row,col] = position;

    avaliableBlock++;
    visited[row][col] = true;

    if(row>=1 && canInto(k,row-1,col) && !visited[row-1][col]){
      walk([row-1,col]);
    }
    if(row<m-1 && canInto(k,row+1,col) && !visited[row+1][col]){
      walk([row+1,col]);
    }
    if(col>=1 && canInto(k,row,col-1) && !visited[row][col-1]){
      walk([row,col-1]);
    }
    if(col<n-1 && canInto(k,row,col+1) && !visited[row][col+1]){
      walk([row,col+1]);
    }
  })([0,0])

  console.log("can visit "+avaliableBlock+" blocks");
  
}

function canInto(k,v1,v2) {
  return computeDigitValues(v1,v2)<=k;
}

function computeDigitValues(v1, v2){

  function computeCore(value) {
    let ret = 0;
    while(value!=0){
      ret += value%10;
      value = Math.floor(value/10);
    }
    return ret;
  }

  return computeCore(v1) + computeCore(v2);
}