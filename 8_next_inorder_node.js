/**
 * 剑指offer面试题8
 * 下一个中序遍历节点
 */

function Node(value, leftChild, rightChild, parent) {
  this.value = value;
  this.leftChild = leftChild;
  this.rightChild = rightChild;
  this.parent = parent;
}

//这里的树参考65页图

var root;
{
  let a = root = new Node('a');
  let b = new Node('b');
  let c = new Node('c');
  let d = new Node('d');
  let e = new Node('e');
  let f = new Node('f');
  let g = new Node('g');
  let h = new Node('h');
  let i = new Node('i');
  a.leftChild = b; a.rightChild = c;
  b.leftChild = d; b.rightChild = e; b.parent = a;
  c.leftChild = f; c.rightChild = g; c.parent = a;
  d.parent = b;
  e.leftChild = h; e.rightChild = i; e.parent = b;
  f.parent = c;
  g.parent = c;
  h.parent = e;
  i.parent = e;
}

function getNext(node) {
  if(!node) return;

  if(node.rightChild){
    let p = node.rightChild;
    while(p.leftChild){
      p = p.leftChild;
    }
    console.log(p.value);
  }
  else if(node.parent.leftChild==node){
    console.log(node.parent.value);
  }
  else if (node.parent.rightChild==node){
    let p = node.parent;
    while(p.parent.rightChild==p){
      p = p.parent;
    }
    if(!p.parent){
      console.log("no next node");
    }else{
      p = p.parent;
      getNext(p);
    }
  }
}

getNext(root.leftChild);