/**
 * 
 */

function insertNodeAtTail(head, data){
    const newNode = {data, next: null};
    if (!head) {
        head = newNode;
    }
    if (head.tail) {
        head.tail.next = newNode;
    }
    head.tail = newNode;
    return head;
}
