/**
 * 剑指Offer 面试题25
 * merge两个递增的链表
 */

function Node(value,next) {
  this.value = value;
  this.next = next;
}

Node.merge = function (root1, root2)  {
  if (!Node._isOrdered(root1) || !Node._isOrdered(root2)) return;
  let ptr1 = root1, ptr2 = root2, nroot=new Node();

  let nptr = nroot;
  while(ptr1 && ptr2){
    nptr.next = new Node();
    nptr = nptr.next;
    if(ptr1.value < ptr2.value){
      nptr.value = ptr1.value;
      ptr1 = ptr1.next;
    }else{
      nptr.value = ptr2.value;
      ptr2 = ptr2.next;
    }
  }

  if(ptr1){
    _addFollow(nptr,ptr1);
  }

  if(ptr2){
    _addFollow(nptr,ptr2);
  }

  return nroot;

  function _addFollow(nptr, remainPtr) {
    while(remainPtr){
      nptr.next = new Node();
      nptr = nptr.next;
      nptr.value = remainPtr.value;
      remainPtr = remainPtr.next;
    }
  }
}

Node._isOrdered = function (root, isAsc) {
  if(!root) return false;
  if(!root.next) return true;
  
  if(!isAsc) isAsc=true;

  let ptr = root;
  while(ptr.next){
    if(!_check(ptr, ptr.next)){
      return false;
    }
    ptr = ptr.next
  }
  return true;

  function _check(ptr1,ptr2) {
    if(isAsc){
      return ptr1.value<ptr2.value;
    }else{
      return ptr2.value<ptr1.value;
    }
  }
}

Node.prototype.output = function () {
  if (this.next) {
    console.log(this.value + "->");
    this.next.output();
  }
  else
    console.log(this.value + ";");
}

{
  const root1 = new Node(0, new Node(1, new Node(2, new Node(3, new Node(4, new Node(5))))));
  const root2 = new Node(2, new Node(4, new Node(6, new Node(8, new Node(10, new Node(12))))));
  Node.merge(root1, root2).output();
}