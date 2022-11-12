/**
 * 
 * @param {*} head 
 * @param {*} data 
 * @returns 
 */
function insertNodeATHead(head, data) {
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