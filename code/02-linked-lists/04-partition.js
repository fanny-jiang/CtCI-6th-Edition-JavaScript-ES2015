function partitionList (list, partition) {
  let current = list;
  let smallerHead, smallerTail, largerHead, largerTail;

  smallerHead = smallerTail = largerHead = largerTail = null;

  while (current) {
    let next = current.next;
    current.next = null;

    if (current.val < partition) {
      if (!smallerHead) { // first node in the smaller list
        smallerHead = smallerTail = current;
      } else { // else, add to the smaller list tail
        smallerTail = smallerTail.next = current;
      }
    } else if (current.val >= partition) {
      if (!largerTail) {
        largerTail = largerHead = current;
      } else {
        largerTail = largerTail.next = current;
      }
    }
    current = next;
  }
  if (smallerTail) smallerTail.next = largerHead;
  return smallerHead || largerHead;
}

module.exports = partitionList;

/*
partition the linked list such that all elements less than the partition, come before nodes that are greater than the partition

Example
input: 3 -> 5 -> 8 -> 5 -> 10 -> 2 -> 1 [partition = 5]
output: 3 -> 1 -> 2 -> 10 -> 5 -> 5 -> 8

Approach:
- create a binary tree!
- let the root be the partition
- nodes < root, get added to left
- nodes >= root, get added to the right
- how to preserve the references?

root =             5
                  / \
    1 -> 2 -> 3 -> 5 -> 8 -> 5 -> 10

- create two new linked lists: one for elements < partition and one for elements >= partition
- hold a reference to the head >= partition
- add smaller values to the tail of the smaller LL
- and change the new small values to point to the partition reference
- add larger values to the tail of the larger LL and set its next to null

O(n) time, O(1) space
*/