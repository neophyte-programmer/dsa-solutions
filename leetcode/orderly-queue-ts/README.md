## LEETCODE - Orderly Queue - TypeScript

### CHALLENGE
You are given a string s and an integer k. You can choose one of the first k letters of s and append it at the end of the string..
Return the lexicographically smallest string you could have after applying the mentioned step any number of moves.

### PROBLEM SOURCE
[LeetCode](https://leetcode.com/problems/orderly-queue/)

### TEST CASES
```javascript
// TEST CASE 1
console.log(orderlyQueue("cba", 1)) // "acb"

// TEST CASE 2
console.log(orderlyQueue("baaca", 3)) // "aaabc"

// TEST CASE 3
console.log(orderlyQueue("baaca", 1)) // "aaabc"

```

### SOLUTION

```javascript
const orderlyQueue = (s: string, k: number): string => {
    // if k > 1, we can reorder the string to get the lexicographically smallest string
    if (k > 1) return s.split('').sort().join('');
    
    // if k === 1, we can only rotate the string to get the lexicographically smallest string
    let result = s;
    for (let i = 0; i < s.length; i++) {
        let temp = s.slice(i) + s.slice(0, i);
        if (temp < result) result = temp;
    }
    return result;
};
```

### ANALYSIS

#### Time Complexity

**O(n^2) or O(nlogn)**
- if k > 1, we sort the string which takes O(nlogn) time
-  if k === 1, we rotate the string n times which takes O(n^2) time
- in the worst case, we have k === 1 and n === 100, so the time complexity is O(n^2)
- in the best case, we have k > 1 and n === 100, so the time complexity is O(nlogn)
- in the average case, we have k === 1 and n === 100, so the time complexity is O(n^2)

#### Space Complexity

**O(n)**
- we create a new string for each rotation, so the space complexity is O(n)
- in the worst case, we have k === 1 and n === 100, so the space complexity is O(n)
- in the best case, we have k > 1 and n === 100, so the space complexity is O(n)
- in the average case, we have k === 1 and n === 100, so the space complexity is O(n)


#### Runtime: 80 ms