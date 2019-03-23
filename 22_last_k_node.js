/**
 * 剑指Offer 面试题22
 * 单向链表倒数第k个节点
 */

function Node(value,next) {
  this.value = value;
  this.next = next;
}

Node.fromBottom = function (root, k) {
  if(!root || k<1) return;
  k = k - 1;//由于题目规定从1开始数，不符合习惯

  let leadPtr = root;
  for(let i=0;i<k;i++){
    leadPtr = leadPtr.next;
    if(!leadPtr) return;
  }

  let followPtr = root;
  while(leadPtr.next){
    followPtr = followPtr.next;
    leadPtr = leadPtr.next;
  }

  return followPtr.value;
}

function test() {
  const root1 = new Node(0);
  let root2;
  const root3 = new Node(0, new Node(1, new Node(2, new Node(3, new Node(4, new Node(5))))));

  const assert = require('assert');
  assert.equal(Node.fromBottom(root1,1),0);
  assert.equal(Node.fromBottom(root2,1),undefined);
  assert.equal(Node.fromBottom(root3,1),5);
  assert.equal(Node.fromBottom(root3,6),0);
  assert.equal(Node.fromBottom(root3,7),undefined);
}

test();

