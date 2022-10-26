// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

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
             this.val = (val===undefined ? 0 : val)
             this.next = (next===undefined ? null : next)
         }
     }

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let head
    let temp
    
    let carry = 0

    while (l1 !== null || l2 !== null) {
        let sum = carry
        if (l1 != null) {
            sum += l1.val
            l1 = l1.next
        }
        if (l2 != null) {
            sum += l2.val
            l2 = l2.next
        }

        let node = new ListNode(Math.floor(sum % 10))
        carry = Math.floor(sum / 10)

        if (head === null) {
            temp = head = node
        }

    }

    if (carry > 0) {
        temp.next = new ListNode(carry)
    }
    
    return head
};