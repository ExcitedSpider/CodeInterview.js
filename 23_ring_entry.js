/**
 * 剑指Offer 面试题23
 * 找出链表中是否有环和环的入口节点
 */

function Node(value,next) {
  this.value = value;
  this.next = next;
}

Node.findRingEntry = function (root) {
  if(!root || !root.next || !root.next.next) return;

  let fastPtr = _hasRing(root);
  if(!fastPtr) return;
  let length = _countLength(fastPtr);
  return _findEntry(root, length);

  function _hasRing(root) {
    let fastPtr = root.next.next, slowPtr = root;
    while(fastPtr!==slowPtr && fastPtr.next.next){
      fastPtr = fastPtr.next.next;
      slowPtr = slowPtr.next;
    }
    if(fastPtr===slowPtr){
      return fastPtr;
    }
    return;
  }

  function _countLength(ptr) {
    let leadPtr = ptr.next;
    let length = 1;
    while(leadPtr !== ptr){
      leadPtr = leadPtr.next;
      length++;
    }
    return length;
  }
  function _findEntry(root, length) {
    let leadPtr = root;
    for(let i=0;i<length;i++){
      leadPtr = leadPtr.next;
    }
    let followPtr = root;
    while(leadPtr!==followPtr){
      leadPtr = leadPtr.next;
      followPtr = followPtr.next;
    }
    return followPtr;
  }
}

{
  let root1 = new Node(0);
  let root2;
  let root3 = new Node(0, new Node(1, new Node(2,new Node(3))));
  let root4 = new Node(0,new Node(1,new Node(2, new Node(3, new Node(4)))));
  root4.next.next.next.next.next = root4.next;

  const assert = require('assert');
  assert.equal(Node.findRingEntry(root4),root4.next);
  assert.equal(Node.findRingEntry(root1),undefined);
  assert.equal(Node.findRingEntry(root2),undefined);
  assert.equal(Node.findRingEntry(root3),undefined);
}