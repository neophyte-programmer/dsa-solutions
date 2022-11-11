/**
* @param {head} head
* @param {number} data
*/

function printLinkedList(head) {
    let current = head;
    while (current) {
        console.log(current.data);
        current = current.next;
    }
}