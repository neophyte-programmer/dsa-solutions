## HackerRank - LinkedList-addto-tail-js

### Problem
You are given the pointer to the head node of a linked list and an integer to add to the list. Create a new node with the given integer. Insert this node at the tail of the linked list and return the head node of the linked list formed after inserting this new node. The given head pointer may be null, meaning that the initial list is empty.

### Problem Source
[https://www.hackerrank.com/challenges/insert-a-node-at-the-tail-of-a-linked-list/problem](https://www.hackerrank.com/challenges/insert-a-node-at-the-tail-of-a-linked-list/problem)

### Solution
```javascript

function insertNodeAtTail(head, data) {
    let node = {
        data: data,
        next: null
    };
    if (!head) {
        head = node;
    } 
    if(head.tail) {
        head.tail.next = node;
    }
    head.tail = node;
    return head;
}

```

### Analysis

#### Time Complexity
**O(1)**

#### Space Complexity
**O(1)**

#### Runtime
**0.5s**