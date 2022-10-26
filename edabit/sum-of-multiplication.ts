// https://edabit.com/challenge/W8R9CPBThreBBXYLS

function multiSum(num: number, ten = 10): number {
	let result = 0
	result = result + num * ten
	ten -= 1

	if (ten === 0) {
		return result
	} else {
		result = result + multiSum(num, ten)
	}

	return result
}
