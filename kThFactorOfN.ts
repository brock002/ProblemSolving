// question
// https://leetcode.com/problems/the-kth-factor-of-n/description/

const kthFactor = (n: number, k: number): number => {
	const factors1: number[] = []
	const factors2: number[] = []

	for (let i = 1; true; i++) {
		if (i > Math.sqrt(n)) break
		if (n % i === 0) {
			factors1.push(i)
			const quotient = n / i
			if (i !== quotient) factors2.push(quotient)
		}
	}

	return factors1.length >= k
		? Number(factors1.at(k - 1))
		: factors2.length >= k - factors1.length
		? Number(factors2.at((k - factors1.length) * -1))
		: -1
}

;(() => {
	const inputs = [
		{ n: 12, k: 3 },
		{ n: 7, k: 2 },
		{ n: 4, k: 4 },
	]
	inputs.forEach((input, index) =>
		console.log(
			`${index + 1}. k th factor for number: ${
				input.n
			} when value for k is ${input.k} will be ${kthFactor(
				input.n,
				input.k
			)}`
		)
	)
})()
