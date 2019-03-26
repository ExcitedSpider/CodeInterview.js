/**
 * 剑指Offer 面试题28
 * 判断一个二叉树是否对称
 */

function Node(value, leftChild, rightChild) {
  this.value = value;
  this.leftChild = leftChild;
  this.rightChild = rightChild;
}

Node.isSymmetric = function (root) {
  if(!root) return false;
  if(!root.leftChild && !root.rightChild) return true;

  const arr1 = _leftFirstTravel(root);
  const arr2 = _rightFirstTravel(root);

  for(let i = 0;i<arr1.length; i++){
    if(arr1[i]!==arr2[i])
      return false;
  }

  return true;

  //左先序遍历
  function _leftFirstTravel(root) {
    const array = [];
    _travelCore(root);
    return array;

    function _travelCore(root) {
      if(!root) return;
      array.push(root.value);
      _travelCore(root.leftChild);
      _travelCore(root.rightChild);      
    }
  }

  //右先序遍历
  function _rightFirstTravel(root) {
    const array = [];
    _travelCore(root);
    return array;

    function _travelCore(root) {
      if(!root) return;
      array.push(root.value);
      _travelCore(root.rightChild);      
      _travelCore(root.leftChild);
    }
  }
}

{
  const root1 = undefined;
  const root2 = new Node(0);
  const root3 = new Node(0, new Node(1, new Node(2),new Node(3)), new Node(1,new Node(3), new Node(2)));
  const root4 = new Node(0, new Node(1, new Node(2),new Node(2)), new Node(1,new Node(4), new Node(2)));

  const assert = require('assert');
  assert.equal(Node.isSymmetric(root1),false);
  assert.equal(Node.isSymmetric(root2),true);
  assert.equal(Node.isSymmetric(root3),true);
  assert.equal(Node.isSymmetric(root4),false);
}