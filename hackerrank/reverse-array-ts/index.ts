function reverseArray(a: number[]): number[] {
    return a.reverse();
    const reversedArray:number[] = [];
    for (let i = a.length - 1; i >= 0; i--) {
        reversedArray.push(a[i]);
    }
    return reversedArray;

}