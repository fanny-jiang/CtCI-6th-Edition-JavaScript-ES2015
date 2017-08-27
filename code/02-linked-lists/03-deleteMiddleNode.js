function deleteMiddleNode (node) {

  if (!node || !node.next) throw new Error('invalid node');

  node.val = node.next.val;
  node.next = node.next.next;

}

module.exports = deleteMiddleNode;

/*
Approach:
- only have access to the node that is being deleted
- update current node.val to be the next node's val
- update the current next to the next node's next

efficiency: O(1) time, O(1) space
*/