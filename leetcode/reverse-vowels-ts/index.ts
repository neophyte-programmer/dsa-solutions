/**
 * 
 * @param s  string to reverse vowels
 * @returns  string with vowels reversed
 */


function reverseVowels(s: string): string {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    const s2arr = s.split('');
    let left = 0;
    let right = s2arr.length - 1;
    while (left < right) {
        if (vowels.includes(s2arr[left]) && vowels.includes(s2arr[right])) {
            const temp = s2arr[left];
            s2arr[left] = s2arr[right];
            s2arr[right] = temp;
            left++;
            right--;
        } else if (vowels.includes(s2arr[left])) {
            right--;
        } else {
            left++;
        }
    }
    return s2arr.join('');
}

// Time Complexity: O(n)
// Space Complexity: O(n)