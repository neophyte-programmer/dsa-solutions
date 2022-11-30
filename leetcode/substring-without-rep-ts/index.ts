/**
 * 
 * @param s 
 * @returns 
 */
function lengthOfLongestSubstring(s: string): number {
    let longest = 0;
    let current = 0;
    let start = 0;
    let end = 0;
    const set = new Set();
    while (end < s.length) {
        if (!set.has(s[end])) {
            set.add(s[end]);
            current++;
            end++;
        } else {
            set.delete(s[start]);
            current--;
            start++;
        }
        longest = Math.max(longest, current);
    }
    return longest;
}

