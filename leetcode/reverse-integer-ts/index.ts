function reverse(x: number): number {
    const isNegative: boolean = x < 0;
    const xstring: string = x.toString()
    const reversedxString: string[] = []
    for (let i = xstring.length - 1; i >= 0; i--) {
        reversedxString.push(xstring[i]);
    }
    const revNum = parseInt(reversedxString.join(''));
    if (revNum > Math.pow(2, 31)) return 0;
    return isNegative ? -revNum : revNum;
};

console.log(reverse(1534236469));
// Time Complexity: O(n)
// Space Complexity: O(n)