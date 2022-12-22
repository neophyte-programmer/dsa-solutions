/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */

function findAveragesOfSubarrays(arr, k) {
  //sliding window approach

  const results = [];
  let windowSum = 0;
  let windowStart = 0;

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    //add the next element
    windowSum += arr[windowEnd];

    //slide the window forward
    //we don't need to slide if we have not hit the required window size of k

    if (windowEnd >= k - 1) {
      //we are **AUTOMATICALLY** returning the window average once we hit the window size of k
      //and pushing to the output array
      results.push(windowSum / k);

      //subtracting the element going out
      windowSum -= arr[windowStart];

      //then sliding the window forward
      windowStart++;

      //adding the element coming in, in the outer/previous loop
      //and repeating this process until we hit the end of the array
    }
  }
  return results;
}

findAveragesOfSubarrays([1, 3, 2, 6, -1, 4, 1, 8, 2], 5); //[2.2, 2.8, 2.4, 3.6, 2.8]
