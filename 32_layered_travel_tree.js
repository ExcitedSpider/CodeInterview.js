/**
 * 剑指Offer 面试题32
 * 按层次打印一颗二叉树
 */


function Node(value, leftChild, rightChild) {
  this.value = value;
  this.leftChild = leftChild;
  this.rightChild = rightChild;
}

Node.layerTravel = function (root) {
  if(!root) return;
  
  const queue = [];
  let output = '';
  queue.push(root);
  while(queue.length!==0){
    let currentNode = queue.shift();
    output += currentNode.value + ' ';
    if(currentNode.leftChild) queue.push(currentNode.leftChild);
    if(currentNode.rightChild) queue.push(currentNode.rightChild);
  }

  console.log(output);
}

{
  const root1 = new Node(0, new Node(1,new Node(3),new Node(4)), new Node(2,undefined,new Node(5)));
  const root2 = undefined;
  const root3 = new Node(0);

  Node.layerTravel(root1);
  Node.layerTravel(root2);
  Node.layerTravel(root3);

}