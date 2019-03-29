/**
 * 剑指Offer 面试题34
 * 寻找二叉树中和为某一值的路径
 */

function Node(value, leftChild, rightChild) {
  this.value = value;
  this.leftChild = leftChild;
  this.rightChild = rightChild;
}

Node.findPath = function (root, sum) {
  if(!root || !sum) return;

  const pathStack = [];
  pathStack.push(root);

  findPathCore(root);

  function findPathCore(node) {
    const flag = compareSumAndStack(sum,pathStack);
    if(flag===0){
      outputPath(pathStack);
    }else if(flag === -1){
      return;
    }else{
      if(node.leftChild){
        pathStack.push(node.leftChild);
        findPathCore(node.leftChild);
        pathStack.pop();
      }
      if(node.rightChild){
        pathStack.push(node.rightChild);
        findPathCore(node.rightChild);
        pathStack.pop();
      }
    }
  }

  function compareSumAndStack(sum, stack) {
    let stacksum = 0;
    for(let i=0;i<stack.length;i++){
      stacksum+=stack[i].value;
    }
    if(sum>stacksum) return 1;
    if(sum===stacksum) return 0;
    if(sum<stacksum) return -1;
  }

  function outputPath(stack) {
    let output = '';
    for(let i=0; i<stack.length; i++){
      output+=stack[i].value+' ';
    }
    console.log(output);
  }
}

{
  const root1 = new Node(10,new Node(5, new Node(4), new Node(7)), new Node(12));
  Node.findPath(root1,22);
  const root2 = undefined;
  Node.findPath(root2,10);
  const root3 = new Node(10);
  Node.findPath(root3,10);
}