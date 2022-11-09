## LeetCode - Sorting the Sentence

A sentence is a list of words that are separated by a single space with no leading or trailing spaces. Each word consists of lowercase and uppercase English letters.

A sentence can be shuffled by appending the 1-indexed word position to each word then rearranging the words in the sentence.

For example, the sentence "This is a sentence" can be shuffled as "sentence4 a3 is2 This1" or "is2 sentence4 This1 a3".


**Problem Source:**  [LeetCode](https://leetcode.com/problems/sorting-the-sentence/)


## TEST CASES
```javascript
// TEST CASE 1
sortSentence("Myself2 Me1 I4 and3"); //Me Myself and I

// TEST CASE 2
sortSentence("is2 sentence4 This1 a3"); // This is a sentence

// TEST CASE 3
sortSentence('I1 am3 nice2 guy4')// I nice am guy

```
## Time Complexity
**O(1)**

## Space Complexity
**O(1)**
