/**
 * 剑指Offer 面试题30
 * 实现一个包含min函数的栈
 */

Array.prototype.top = function () {
  return this[this.length-1]
}

class minStack{
  constructor(){
    this.dataStack = new Array();
    this.assistStack = new Array();
  }
  
  push(element){
    this.dataStack.push(element);
    if(this.assistStack.length===0)
      this.assistStack.push(0);
    else
    {
      if(element < this.dataStack[this.assistStack.top()]){
        this.assistStack.push(this.assistStack.length);
      }
      else{
        this.assistStack.push(this.assistStack.top());
      }
    }
  }

  pop(){
    if(this.dataStack.length===0) return;
    this.assistStack.pop();
    return this.dataStack.pop();
  }

  min(){
    if(this.dataStack.length===0) return;
    return this.dataStack[this.assistStack.top()];
  }

  toString(){
    return this.dataStack.toString();
  }
}

{
  const assert = require('assert');

  const stack = new minStack();
  stack.push(3);
  stack.push(1);
  stack.push(2);
    
  assert.equal(stack.min(),1);
  stack.push(0);
  assert.equal(stack.min(),0);
  stack.pop();
  stack.pop();
  stack.pop();
  assert.equal(stack.min(),3);
}