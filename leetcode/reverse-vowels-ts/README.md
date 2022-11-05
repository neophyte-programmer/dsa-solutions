## LEETCODE - REVERSE VOWELS IN A STRING

### CHALLENGE
Given a string s, reverse only all the vowels in the string and return it.
The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

### PROBLEM SOURCE
[LeetCode](https://leetcode.com/problems/reverse-vowels-of-a-string/)

### TEST CASES
```javascript
// TEST CASE 1
console.log(reverseVowels('hello')) // 'holle'

// TEST CASE 2
console.log(reverseVowels('leetcode')) // 'leotcede'

// TEST CASE 3
console.log(reverseVowels('aA')) // 'Aa'
```
### SOLUTION
```javascript
function reverseVowels(s: string): string {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
  const sArr = s.split('')
  let left = 0
  let right = sArr.length - 1
  while (left < right) {
    if (vowels.includes(sArr[left]) && vowels.includes(sArr[right])) {
      const temp = sArr[left]
      sArr[left] = sArr[right]
      sArr[right] = temp
      left++
      right--
    } else if (vowels.includes(sArr[left])) {
      right--
    } else if (vowels.includes(sArr[right])) {
      left++
    } else {
      left++
      right--
    }
  }
  return sArr.join('')
}
```
### ANALYSIS
#### Time Complexity
**O(n)**
#### Space Complexity
**O(1)**
#### Runtime: 104 ms