/**
 * 
 * @param s: string
 * @returns result: number
 */

function romanToInt(s: string): number {
	s = s.toUpperCase()
	let result:number = 0

	for (let i = 0; i < s.length; i++) {
		switch (s[i]) {
			case 'I':
				if (s[i + 1] === 'V') {
					result += 4
					i++
				} else if (s[i + 1] === 'X') {
					result += 9
					i++
				} else {
					result += 1
				}
				break
			case 'V':
				result += 5
				break
			case 'X':
				if (s[i + 1] === 'L') {
					result += 40
					i++
				} else if (s[i + 1] === 'C') {
					result += 90
					i++
				} else {
					result += 10
				}
                break
            case 'L':
                result += 50
                break
            case 'C':
                if (s[i + 1] === 'D') {
					result += 400
					i++
				} else if (s[i + 1] === 'M') {
					result += 900
					i++
				} else {
					result += 100
				}
                break
            case 'D':
                result += 500
                break
            case 'M':
                result += 1000
                break
		}
	}

	return result
}

// test case for romanToInt

// TEST CASE 1
console.log(romanToInt('iii')) // 3

// TEST CASE 2
console.log(romanToInt('IV')) // 4

// TEST CASE 3
console.log(romanToInt('Ix')) // 9

// TEST CASE 4
console.log(romanToInt('LVIiI')) // 58

// Time Complexity: O(n)
// Space Complexity: O(1)