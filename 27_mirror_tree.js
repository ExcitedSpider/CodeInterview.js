/**
 * 剑指Offer 面试题27
 * 树的镜像
 */

function Node(value, leftChild, rightChild) {
  this.value = value;
  this.leftChild = leftChild;
  this.rightChild = rightChild;
}

Node.mirror = function (root) {
  if(!root) return;
  if(!root.leftChild&&!root.rightChild) return root;
  
  const left = root.leftChild;
  const right = root.rightChild;
  root.leftChild = right;
  root.rightChild = left;
  
  Node.mirror(left);
  Node.mirror(right);
  return root;
}

{
  const root1 = undefined;
  const root2 = new Node(0);
  const root3 = new Node(8, new Node(6,new Node(5),new Node(7)),new Node(10,new Node(9),new Node(11)));

  const nr1 = Node.mirror(root1);
  const nr2 = Node.mirror(root2);
  const nr3 = Node.mirror(root3);

  console.log(JSON.stringify(nr1));
  console.log(JSON.stringify(nr2));
  console.log(JSON.stringify(nr3));
}