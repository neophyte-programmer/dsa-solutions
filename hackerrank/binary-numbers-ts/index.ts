/**
 * Given a base-10 interger, n, 
 * convert it to  binary (base-2). Then find and print the base-10 integer
 * denoting the maximum number of consecutive 1's in n's binary representation.
 * @param n - base-10 integer
 * @returns base-10 integer denoting the maximum number of consecutive 1's in n's binary representation
 * 
 */

function binaryNumbers(n: number): number {
    const binary = n.toString(2);
    let max = 0;
    let count = 0;
    for (let i = 0; i < binary.length; i++) {
        if (binary[i] === '1') {
            count++;
        } else {
            count = 0;
        }
        if (count > max) {
            max = count;
        }
    }
    return max;
}
