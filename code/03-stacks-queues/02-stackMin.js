export default function minStack () {
  this.stack = [];
}

minStack.prototype.push = function (val) {
  let min = this.min();
  let obj = {
    val: val,
    min: Math.min(min === undefined ? val : min, val) };
  this.stack.push(obj);
};

minStack.prototype.pop = function () {
  if (this.stack.length === 0) {
    return undefined;
  } else {
    let val = this.stack.pop();
    return val.val;
  }
};

minStack.prototype.min = function () {
  if (this.stack.length === 0) return undefined;
  let lastIdx = this.getLength() - 1;
  let min = this.stack[lastIdx].min;
  return min;
};

minStack.prototype.isEmpty = function () {
  if (this.stack.length === 0) return true;
};

minStack.prototype.getLength = function() {
  return this.stack.length;
};

/*
design a stack, which in addition to push and pop, has a function min which returns the min element

example:
stack: top -> [{3, min: 3} -> {5, min: 3} -> {4, min: 3}, {2, min: 2}, {6, min: 2}]

approach:
- has to be a linked list, each node has a value that references the min value of all the values beneath it
- the most recently added node would have the most up to date minimum.

efficiency:
- push, pop, peek, min O(1) time
- push O(N) space because additional space required to create wrapping object to hold min at that point. need to create a min value for each node.
- pop, peek, min O(1) space


*/
