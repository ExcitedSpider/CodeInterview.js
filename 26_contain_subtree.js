/**
 * 剑指Offer 面试题26
 * 判断树中是否包含子树
 */

function Node(value, leftChild, rightChild) {
  this.value = value;
  this.leftChild = leftChild;
  this.rightChild = rightChild;
}

Node.prototype.hasSubtree = function (subroot) {
  if(!subroot) return true;

  let result = Node._match(this, subroot);
  if (this.leftChild && !result) {
    result =  this.leftChild.hasSubtree(subroot);
  }
  if (this.rightChild && !result){
    result =  this.rightChild.hasSubtree(subroot);
  }

  return result;
}

Node._match = function(tree, subtree) {
  if (!subtree) return true;
  else if (!tree && subtree) return false;
  else if (tree.value === subtree.value) 
    return Node._match(tree.leftChild, subtree.leftChild) && Node._match(tree.rightChild, subtree.rightChild);
  return false;
}

{
  let root = new Node(0,new Node(1), new Node(2));
  root.leftChild.leftChild = new Node(3);
  root.leftChild.rightChild = new Node(4);
  root.rightChild.leftChild = new Node(5);
  root.rightChild.rightChild = new Node(6);

  let assert = require('assert');
  assert.equal(root.hasSubtree(new Node(2,undefined,new Node(6))),true);
  assert.equal(root.hasSubtree(new Node(2,new Node(5),new Node(6))),true);
  assert.equal(root.hasSubtree(new Node(2)),true);
  assert.equal(root.hasSubtree(new Node(2,new Node(5))),true);
  assert.equal(root.hasSubtree(new Node(2,new Node(6))),false);
  assert.equal(root.hasSubtree(new Node(2,undefined,new Node(5))),false);
  assert.equal(root.hasSubtree(),true);
}