## HackerRank - LinkedList-addto-Head-JS

### Problem
Given a pointer to the head of a linked list, insert a new node before the head. The next value in the new node should point to the head and the data value should be replaced with a given value. Return a reference to the new head of the list. The head pointer given may be null meaning that the initial list is empty.

### Problem Source
[https://www.hackerrank.com/challenges/insert-a-node-at-the-head-of-a-linked-list/problem](https://www.hackerrank.com/challenges/insert-a-node-at-the-head-of-a-linked-list/problem)

### Solution
```javascript

function function insertNodeATHead(head, data) {
    let newNode = {data, next: null};
    if (head){
        newNode.next = head;
    }
    head = newNode;

    if(!head.tail){
        head.tail = newNode;
    }
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