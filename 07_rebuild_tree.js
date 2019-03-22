/**
 * 剑指Offer面试题7
 * 重建二叉树
 */

var preorder = [1,2,4,7,3,5,6,8];
var inorder = [4,7,2,1,5,3,8,6];

//辅助函数
Array.prototype.split = function (sep) {
  let index = this.findIndex((value)=>{
    return sep == value;
  });
  return [this.slice(0,index), this.slice(index+1)]
}

function Node(value,leftChild,rightChild) {
  this.value = value;
  this.leftChild = leftChild;
  this.rightChild = rightChild;
}

function rebuildTree(preorder, inorder,rootNode) {

  if(!preorder.length) return;

  let root = preorder[0];
  let [leftInorder,rightInorder] = inorder.split(root);
  let leftPreorder = preorder.slice(1,leftInorder.length+1);
  let rightPreorder = preorder.slice(leftInorder.length+1);

  rootNode.leftChild = new Node(leftPreorder[0]);
  rootNode.rightChild = new Node(rightPreorder[0]);

  rebuildTree(leftPreorder,leftInorder,rootNode.leftChild);
  rebuildTree(rightPreorder,rightInorder,rootNode.rightChild);
}

var rootNode0 = new Node(preorder[0]);
rebuildTree(preorder,inorder,rootNode0);
console.log(JSON.stringify(rootNode0));
