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
		this.val = val === undefined ? 0 : val
		this.next = next === undefined ? null : next
	}
}

function addTwoNumbers(
	l1: ListNode | null,
	l2: ListNode | null
): ListNode | null {
	return add(l1, l2, 0)

	function add(
		l1: ListNode | null,
		l2: ListNode | null,
		carried: number
	): ListNode | null {
		const value1 = (l1 && l1.val) || 0
		const value2 = (l2 && l2.val) || 0
		const sum = value1 + value2 + carried
		const carry = Math.floor(sum / 10)

		if (l1 || l2 || carried) {
			return {
				val: sum % 10,
				next: add(l1 && l1.next, l2 && l2.next, carry),
			}
		}
		return null
	}
}
