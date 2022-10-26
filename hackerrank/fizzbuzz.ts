// Write a short program that prints each number from 1 to 100 on a new line. 

// For each multiple of 3, print "Fizz" instead of the number. 

// For each multiple of 5, print "Buzz" instead of the number. 

// For numbers which are multiples of both 3 and 5, print "FizzBuzz" instead of the number.

/**
 * 
 * @param n : number
 * @returns  void
 */

function fizzBuzz(n: number): void {
    let i:number = 1;
    for(i = 1; i <=n; i++ )
    {
        if(i % 15 == 0){
            console.log("FizzBuzz");
        }else if(i % 3 == 0){
            console.log("Fizz")
        }else if(i % 5 == 0){
            console.log("Buzz")
        }else{
            console.log(i)
        }
    }
}

// test caseS for fizzBuzz

// TEST CASE 1
fizzBuzz(15) // 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz

// TEST CASE 2
fizzBuzz(5) // 1, 2, Fizz, 4, Buzz

// TEST CASE 3
fizzBuzz(3) // 1, 2, Fizz

// Time Complexity: O(n)
// Space Complexity: 