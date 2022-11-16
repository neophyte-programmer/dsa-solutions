/**
 * 
 * @param s 
 * @returns boolean
 */

function isPalindrome(s: string): boolean {
    let i = 0;
    let j = s.length - 1;
    while (i < j) {
        if (!isAlphaNumeric(s[i])) {
            i++;
            continue;
        }
        if (!isAlphaNumeric(s[j])) {
            j--;
            continue;
        }
        if (s[i].toLowerCase() !== s[j].toLowerCase()) {
            return false;
        }
        i++;
        j--;
    }
    return true;
};

/**
 * 
 * @param c 
 * @returns boolean
 */
function isAlphaNumeric(c: string): boolean {
    return (c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z') || (c >= '0' && c <= '9');
}
