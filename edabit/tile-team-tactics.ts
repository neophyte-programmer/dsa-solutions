// https://edabit.com/challenge/NHfYRHg2tDtcZyykB

function possibleBonus(a: number, b: number): boolean {
	if (
		a + 1 === b ||
		a + 2 === b ||
		a + 3 === b ||
		a + 4 === b ||
		a + 5 === b ||
		a + 6 === b
	) {
		return true
	}
	return false
}
