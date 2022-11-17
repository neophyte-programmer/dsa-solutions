/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

const listValues = (head: ListNode | null): number[] => {
    const elements: number[] = [];
    let curNode = head;
    while (curNode) {
        elements.push(curNode.val);
        curNode = curNode.next;
    }
    return elements;
}

function isLikedListPalindrome(head: ListNode | null): boolean {
    let values = listValues(head);
    let i = 0;
    let j = values.length - 1;
    while (i < j) {
        if (values[i] !== values[j]) return false
        i++;
        j--;
    }
    return true
};