// question
// https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/description/

const isVowel = (input: string): boolean =>
	input === 'a' ||
	input === 'e' ||
	input === 'i' ||
	input === 'o' ||
	input === 'u'

const maxVowels = (s: string, k: number): number => {
	let vowelsCount = 0,
		currentVowelCount = 0

	for (let i = 0; i < s.length; i++) {
		if (isVowel(s.charAt(i))) currentVowelCount++
		if (i >= k && isVowel(s.charAt(i - k))) currentVowelCount--
		vowelsCount =
			currentVowelCount > vowelsCount ? currentVowelCount : vowelsCount
	}

	return vowelsCount
}

;(() => {
	const inputs = [
		{ s: 'abciiidef', k: 3 },
		{ s: 'aeiou', k: 2 },
		{ s: 'leetcode', k: 3 },
	]
	inputs.forEach((input, index) =>
		console.log(
			`maximum vowels possible for input ${index + 1} i.e. s: ${
				input.s
			} & k: ${input.k} is ${maxVowels(input.s, input.k)}`
		)
	)
})()
