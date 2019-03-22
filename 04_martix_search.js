/**
 * 剑指Offer面试题4
 * 二维数组查找
 */

var matrix =[[1,2,8,9],[2,4,9,12],[4,7,10,13],[6,8,11,15]];

function find(wanted, matrix, col, row) {
  if(!matrix || !col || !row) return;
  let cur_col = 0;
  let cur_row = row-1;
  while(cur_col<=col-1 && cur_row >=0){
    if(matrix[cur_col][cur_row]===wanted){
      console.log("find " +wanted +" in " + cur_col + ", "+ cur_row);
      return;
    }
    else if(matrix[cur_col][cur_row]<wanted){
      cur_col++;
    }else{
      cur_row--;
    }
  }
  console.log("Not found!");
}

find(7,matrix,4,4);
find(5,matrix,4,4);