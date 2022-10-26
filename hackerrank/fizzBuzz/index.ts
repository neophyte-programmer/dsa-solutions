
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
