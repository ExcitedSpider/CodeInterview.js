/**
 * 剑指Offer 面试题35
 * 复杂链表的复制
 */

function Node(value, next, sibling) {
  this.value = value;
  this.next = next;
  this.sibling = sibling;
}

//JS不像C/Cpp一样直接可以拿指针的地址值做Map的Key
//所以加一个条件：链表中没有重复的值，用链表的值做Key
//对不住，我太菜了，如果有别的解法可以告诉我，给您磕头了，咚咚咚
Node.copy = function (start) {
  if(!start) return;
  const map = {};
  const nstart = new Node(start.value);
  let ptr = start, nptr = nstart;
  map[ptr.value]=nptr;

  while(ptr.next){
    nptr.next = new Node(ptr.next.value);
    nptr = nptr.next;
    ptr = ptr.next;
    map[ptr.value] = nptr;
  }

  nptr=nstart, ptr = start;
  while(ptr.next){
    if(ptr.sibling){
      nptr.sibling = map[ptr.sibling.value];
    }
    ptr = ptr.next;
    nptr = nptr.next;
  }

  return nstart;
}

{
  const start = new Node(0, new Node(1, new Node(2, new Node(3))));
  start.sibling = start.next.next;
  start.next.sibling = start;
  console.log(Node.copy(start));
}