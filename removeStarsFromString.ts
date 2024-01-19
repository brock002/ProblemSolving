// question
// https://leetcode.com/problems/removing-stars-from-a-string/description/

// Approach #1 (works, but it's slow, O(n^2))
// const removeStars = (s: string): string => {
// 	const removableCharIndexes: number[] = []

// 	for (let i = 0; i < s.length; i++) {
// 		if (s.charAt(i) === '*') {
// 			removableCharIndexes.push(i)
// 			for (let j = i - 1; j >= 0; j--) {
// 				if (!removableCharIndexes.includes(j)) {
// 					removableCharIndexes.push(j)
// 					break
// 				}
// 			}
// 		}
// 	}

// 	return s
// 		.split('')
// 		.filter((_, index) => !removableCharIndexes.includes(index))
// 		.join('')
// }

// Approach #2 (works, but it's still slow, O(n^2))
// const removeStars = (s: string): string => {
// 	const removableCharIndexes = new Set<number>()

// 	for (let i = 0; i < s.length; i++) {
// 		if (s.charAt(i) === '*') {
// 			let j = i + 1
// 			removableCharIndexes.add(i)
// 			removableCharIndexes.add(i - 1)
// 			while (s.charAt(j) === '*') {
// 				removableCharIndexes.add(j)
// 				let prevCharIndex = i - (j - i + 1)
// 				while (removableCharIndexes.has(prevCharIndex)) prevCharIndex--
// 				removableCharIndexes.add(prevCharIndex)
// 				j++
// 			}
// 			i = j
// 		}
// 	}

// 	return s
// 		.split('')
// 		.filter((_, index) => !removableCharIndexes.has(index))
// 		.join('')
// }

const removeStars = (s: string): string => {
	const stack: string[] = []

	for (let i = 0; i < s.length; i++) {
		if (s.charAt(i) === '*') stack.pop()
		else stack.push(s.charAt(i))
	}

	return stack.join('')
}

;(() => {
	const inputs = ['leet**cod*e', 'erase*****', 'abb*cdfg*****x*']
	inputs.forEach((input, index) =>
		console.log(
			`result string after removing *'s from input ${
				index + 1
			} i.e. ${input} is ${removeStars(input)}`
		)
	)
})()
