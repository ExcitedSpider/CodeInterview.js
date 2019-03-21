/**
 * 面试题12
 * 矩阵路径
 * 
 * 示例输入：
 * bfcj
 * 0 1
 */
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

var linenum = 0;
var pattern;
var start;

rl.on('line', (line) => {
  if (linenum === 0) {
    pattern = line;
    linenum++;
  } else {
    start = line.split(" ").map((value) => {
      return Number.parseInt(value);
    })
    getPath(pattern, start);
    rl.close();
  }
})

function getPath(pattern, start) {
  let matrix = [
    ['a', 'b', 't', 'g'],
    ['c', 'f', 'c', 's'],
    ['j', 'd', 'c', 'h']
  ]
  let visited = [];
  
  let rowsOfMatrix = matrix.length;
  let colsOfMatrix = matrix[0].length;

  for (let i = 0; i < rowsOfMatrix; i++) {
    visited[i] = new Array();
  }
  let path = [];
  let haspath = false;

  console.log('From '+ start.join(','));

  //闭包实现
  (function getPathCore (pattern, start, position, visited,path){
    let [row, col] = [start[0], start[1]];
  
    if (matrix[row][col] !== pattern.charAt(position)) return;

    if(position === pattern.length-1){
      console.log(path.join(','));
      haspath=true;
    }

    let newVisited = [];
    for (let i = 0; i < rowsOfMatrix; i++) {
      newVisited[i] = new Array();
      for (let j = 0; j < colsOfMatrix; j++) {
        newVisited[i][j] = visited[i][j];
      }
    }
    newVisited[row][col] = true;

    if(!haspath){ //如果找到路径就不搜了，小优化
      if (row >= 1 && !visited[row - 1][col]) {
        let newPath = path.concat();
        newPath.push('go up');
        getPathCore(pattern, [row - 1, col], position + 1, newVisited,newPath)
      }
      if (row < 2 && !visited[row + 1][col]) {
        let newPath = path.concat();
        newPath.push('go down');
        getPathCore(pattern, [row + 1, col], position + 1, newVisited,newPath)
      }
      if (col >= 1 && !visited[row][col - 1]) {
        let newPath = path.concat();
        newPath.push('go left');
        getPathCore(pattern, [row, col - 1], position + 1, newVisited,newPath)
      }
      if (col < 3 && !visited[row][col + 1]) {
        let newPath = path.concat();
        newPath.push('go right');
        getPathCore(pattern, [row, col + 1], position + 1, newVisited,newPath)
      }
    }
    
  })(pattern, start, 0, visited,path)

  if(!haspath){
    console.log("No path to match pattern" + pattern);
  }
}