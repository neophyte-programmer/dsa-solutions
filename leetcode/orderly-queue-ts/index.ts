/**
 * 
 * @param s  The string s
 * @param k  The number k
 * @returns  The lexicographically smallest string you could have after applying the mentioned step any number of moves.
 */
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
}

