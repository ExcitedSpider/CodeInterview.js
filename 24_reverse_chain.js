/**
 * 剑指Offer 面试题24
 * 反转链表
 */

function Node(value,next) {
  this.value = value;
  this.next = next;
}

Node.prototype.output = function () {
  if (this.next) {
    console.log(this.value + "->");
    this.next.output();
  }
  else
    console.log(this.value + ";");
}

Node.reverse = function (root) {
  if(!root || !root.next) return root;

  let ptr = root;
  let nextptr = ptr.next;

  while(nextptr.next){
    let beforePtr = ptr;
    ptr = nextptr;
    nextptr = nextptr.next;
    ptr.next = beforePtr;
  }

  nextptr.next = ptr;
  root.next = undefined;
  return nextptr;
}

{
  const root1 = new Node(0, new Node(1, new Node(2, new Node(3, new Node(4, new Node(5))))));
  const root2 = new Node(0, new Node(1));
  const root3 = undefined;
  const root4 = new Node(0);

  Node.reverse(root1).output();
  Node.reverse(root2).output();
  Node.reverse(root3);
  Node.reverse(root4).output();
}