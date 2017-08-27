function removeDuplicates (node) {
  if (!node) return node;
  let duplicates = new Set();

  let current = node;

  duplicates.add(current.val);

  while (current.next) {
    if (duplicates.has(current.next.val)) {
      current.next = current.next.next;
    } else {
      duplicates.add(current.next.val);
      current = current.next;
    }
  }
  return node;
}

module.exports = removeDuplicates;


/*
Approach: use a set to store values
if a set.has(node.value), then you want to make it point to the next one

Efficiency: O(n) time, O(n) space
*/