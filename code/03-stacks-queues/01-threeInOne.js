function ThreeStacks () {
  this.stacks = [];
  this.lengths = [0, 0, 0];
}

ThreeStacks.prototype.push = function (stack, val) {
  let index = this.getLength(stack) * 3 + stack - 1;
  this.stacks[index] = val;
  this.lengths[stack - 1]++;
};

ThreeStacks.prototype.pop = function (stack) {
  let length = this.getLength(stack),
    value;
  if (length > 0) {
    let index = (length - 1) * 3 + stack - 1;
    value = this.stacks[index];
    this.stacks[index] = undefined;
    this.lengths[stack - 1]--;
  }
  return value;
};

ThreeStacks.prototype.peek = function (stack) {
  let length = this.getLength(stack);
  let value;
  if (length > 0) {
    let index = (length - 1) * 3 + stack - 1;
    value = this.stacks[index];
  }
  return value;
};

ThreeStacks.prototype.isEmpty = function (stack) {
  return this.getLength(stack) === 0;
};

ThreeStacks.prototype.getLength = function (stack) {
  return this.lengths[stack-1];
};

module.exports = ThreeStacks;

/*
How you would use a single array to implement 3 stacks?
- each end of the array can be the top of a different stack
- or each element in the array can be a linkedlist stack
*/