/**
 * 剑指Offer 面试题29
 * 顺时针打印矩阵
 */


function clockwisePrint(matrix) {
  if(!matrix) return;

  const rows = matrix.length;
  const cols = matrix[0].length;
  if(rows==1 && cols==1) {
    console.log(matrix[0][0]);
    return;
  }
  let output = '';
  for(let i=0;i<cols;i++){
    output += matrix[0][i];
    output += ' ';
  }
  let x=cols-1, xstep=cols-1, y=0, ystep=rows-1;
  while(xstep>0 && ystep>0){
    for(let i=0;i<ystep;i++){
      y++;
      _addOutput(x,y)
    }
    ystep--;
    for(let i=0;i<xstep;i++){
      x--;
      _addOutput(x,y)
    }
    xstep--;
    for(let i=0;i<ystep;i++){
      y--;
      _addOutput(x,y)
    }
    ystep--;
    for(let i=0;i<xstep;i++){
      x++;
      _addOutput(x,y)
    }
    xstep--;
  }
  console.log(output);
  
  function _addOutput(x,y) {
    output += matrix[y][x];
    output += ' ';
  }
}

{
  const matrix = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16]
  ]

  clockwisePrint(matrix);
}
