## HackerRank - Data Structures > Arrays > Arrays - DS
An array is a type of data structure that stores elements of the same type in a contiguous block of memory. In an array, A, of size N, each memory location has some unique index, i (where 0 <= i < N), that can be referenced as A[i] (you may also see it written as Ai).

Reverse an array of integers.

**Example**
A = [1,2,3]
Return [3,2,1].

**Function Description**
Complete the function reverseArray in the editor below.

reverseArray has the following parameter(s):

int A[n]: the array to reverse

**Returns**

int[n]: the reversed array

**Input Format**

The first line contains an integer, n, the number of integers in A.
The second line contains n space-separated integers that make up A.

**Constraints**
1 <= n <= 10^3
1 <= A[i] <= 10^4, where A[i] is the ith integer in A.

**Sample Input 1**
```
4
1 4 3 2
```
**Sample Output 1**
```
2 3 4 1
```

**Explanation 1**
When we reverse the array A=[1,4,3,2], we get A=[2,3,4,1].

**Sample Input 2**
```
2
1 2
```
**Sample Output 2**
```
2 1
```

**Explanation 2**
When we reverse the array A=[1,2], we get A=[2,1].

**Problem Source:** [HackerRank](https://www.hackerrank.com/challenges/arrays-ds/problem)

## TEST CASES
```javascript
reverseArray([1, 2, 3, 4, 5]) // [5, 4, 3, 2, 1]
reverseArray([1, 2, 3, 4]) // [4, 3, 2, 1]
reverseArray([1, 2, 3]) // [3, 2, 1]
reverseArray([1, 2]) // [2, 1]
reverseArray([1]) // [1]
```
## Time Complexity
**O(n)**
## Space Complexity
**O(n)**




