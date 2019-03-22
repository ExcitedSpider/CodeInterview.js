/**
 * 剑指Offer 面试题16
 * 实现pow函数
 */

function pow(base, index) {
  if(index===0)
    return 1;

  if(base===0){
    return 0;
  }

  let result = base;

  if(index >= 1)
  {
    while(index!==1){
      result = result * base;
      index--;
    }
  }
  else
  {
    while(index!==-1){
      result = result * base;
      index++;
    }
    result = 1 / result;
  }

  return result;
}

function test() {
  const assert = require('assert');
  assert.equal(pow(-21,0),1);
  assert.equal(pow(5,5),3125);
  assert.equal(pow(0,9999),0);
  assert.equal(pow(5,-5),Math.pow(5,-5));
  assert.equal(pow(5,1),5);
  assert.equal(pow(5,-1),Math.pow(5,-1));
}

test();