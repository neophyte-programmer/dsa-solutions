## 234. PALINDROME LINKED LIST

Given the head of a singly linked list, return true if it is a palindrome.

### Example 1:

Input: head = [1,2,2,1]
Output: true

### Problem Link:

[Palindrome Linked List](https://leetcode.com/problems/palindrome-linked-list/)

### Solution:

#### TypeScript

```typescript
const listValues = (head: ListNode | null): number[] => {
  const elements: number[] = [];
  let curNode = head;
  while (curNode) {
    elements.push(curNode.val);
    curNode = curNode.next;
  }
  return elements;
};

function isPalindrome(head: ListNode | null): boolean {
  let values = listValues(head);
  let i = 0;
  let j = values.length - 1;
  while (i < j) {
    if (values[i] !== values[j]) return false;
    i++;
    j--;
  }
  return true;
}
```

### Complexity Analysis:

- Time Complexity: O(n)
- Space Complexity: O(n)
- Runtime: 104 ms
