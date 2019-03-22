/**
 * 剑指Offer 面试题18
 * 删除单向链表的指定节点
 * 使用复制下一节点的方式，因为这样不需要对Root做单独的处理
 * 不过需要对最后一个节点做单独处理
 */

function Node(value, next) {
  this.value = value;
  this.next = next;
}

//本例中只需要浅复制
Node.copy = function (target, source) {
  target.value = source.value;
}

Node.prototype.output = function () {
  if (this.next) {
    console.log(this.value + "->");
    this.next.output();
  }
  else
    console.log(this.value + ";");
}

Node.remove = function (root, deleteValue) {
  let ptr = root;
  while (ptr.value !== deleteValue && ptr.next) {
    ptr = ptr.next;
  }
  if (ptr.value !== deleteValue) {
    return; //没找到要删除的节点
  }

  //处理最后一个节点的情况
  if (!ptr.next) {
    let ptrBefore = root;
    while (ptrBefore.next !== ptr) {
      ptrBefore = ptrBefore.next;
    }
    ptrBefore.next = undefined;
  }
  else {
    //处理普通情况
    Node.copy(ptr, ptr.next);
    ptr.next = ptr.next.next;
  }
}

function main() {
  const root = new Node(0, new Node(1, new Node(2, new Node(3, new Node(4, new Node(5))))))
  console.log("origin: ");
  root.output();

  console.log("remove 5:");
  Node.remove(root, 5);
  root.output();

  console.log("remove 2:");
  Node.remove(root,2);
  root.output();

  console.log("remove 0:");
  Node.remove(root,0);
  root.output();
}

main();