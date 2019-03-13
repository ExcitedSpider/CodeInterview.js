/**
 * 剑指offer面试题9
 * 用两个栈实现队列
 */

function Queue() {
  this.stack1 = new Array();
  this.stack2 = new Array();
}

Queue.prototype.append = function(element){
  this.stack1.push(element);
}

Queue.prototype.delete = function () {
  if(this.stack1.length===0){
    throw new Error("No Element In Array")
  }
  while(this.stack1.length!==0){
    this.stack2.push(this.stack1.pop());
  }
  let ele = this.stack2.pop();
  while(this.stack2.length!==0){
    this.stack1.push(this.stack2.pop());
  }
  return ele;
}

Queue.prototype.toString = function () {
  return this.stack1.toString();
}

let q = new Queue();
q.append('1')
q.append('2')
q.append('3')
console.log(q.toString());
q.delete();
q.append('4');
console.log(q.toString());