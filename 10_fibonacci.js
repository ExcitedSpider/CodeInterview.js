/**
 * 剑指Offer面试题10
 * 斐波那契数列的迭代算法
 */


function fibnacci(n) {
  let results = [0,1];
  if(n<0) return;
  if(n<2) return results[n];

  let i = 2;
  while(i!=n){
    results[i] = results[i-1]+results[i-2]; 
    i++;
  }

  return results[i-1];
}

console.log(fibnacci(10));
