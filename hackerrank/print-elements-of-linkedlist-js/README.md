## HackerRank - Print Elements of a Linked List - JavaScript

### Problem Statement
This is to practice traversing a linked list. Given a pointer to the head node of a linked list, print each node's data element, one per line. If the head pointer is null (indicating the list is empty), there is nothing to print.

### Function Description
Complete the function printLinkedList in the editor. It should print each element of the linked list on a new line.
printLinkedList has the following parameter(s):
* SingleLinkedListNode head: a reference to the head of the list

#### print
* For each node, print its data element on a new line.

### Input Format
The first line of input contains , the number of elements in the linked list.
The next  lines contain one element each, which are the elements of the linked list.
**Note:** Do not read any input from stdin/console. Complete the printLinkedList function in the editor.

### Sample Input
```
2
16
13
```

### Sample Output
```
16
13
```

### Explanation
There are two elements in the linked list. They are represented as 16 -> 13 -> NULL. So, the output is 16 -> 13 -> NULL.


### Solution
```javascript
function printLinkedList(head) {
    let current = head;
    while (current) {
        console.log(current.data);
        current = current.next;
    }
}
```

### Time Complexity
**O(n)**

### Space Complexity
**O(1)**

### Test Cases
```javascript
// TEST CASE 1
const head1 = new SinglyLinkedListNode(16);
head1.next = new SinglyLinkedListNode(13);
printLinkedList(head1); // 16 13

// TEST CASE 2
const head2 = new SinglyLinkedListNode(16);
head2.next = new SinglyLinkedListNode(13);
head2.next.next = new SinglyLinkedListNode(7);
printLinkedList(head2); // 16 13 7

```
