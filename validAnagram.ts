// question
// https://leetcode.com/problems/valid-anagram/description/

// Approach #1 using Map
const isAnagram1 = (s: string, t: string): boolean => {
	// if the length of both strings doesn't match result false
	if (s.length !== t.length) return false

	let result = true
	// initiate a Map to store the count of characters in first string
	const charCount = new Map<string, number>()

	// loop over first string
	for (const c of s) charCount.set(c, (charCount.get(c) || 0) + 1)

	// loop over second string
	for (const c of t) charCount.set(c, (charCount.get(c) || 0) - 1)

	// loop over Map values to determine result
	for (const val of charCount.values()) if (!!val) result = false

	return result
}

// Approach #2 using Object
const isAnagram2 = (s: string, t: string): boolean => {
	// if the length of both strings doesn't match result false
	if (s.length !== t.length) return false

	// initiate a Object to store the count of characters in first string
	const charCount: { [k: string]: number } = {}

	// loop over first string
	for (const c of s) charCount[c] = (charCount[c] || 0) + 1

	// loop over second string
	for (const c of t) charCount[c] = (charCount[c] || 0) - 1

	// check all values of the Object
	return Object.values(charCount).every((val) => !val)
}

;(() => {
	const inputs = [
		{
			s: 'anagram',
			t: 'nagaram',
		},
		{
			s: 'rat',
			t: 'car',
		},
	]
	inputs.forEach((input, index) =>
		console.log(
			`${index + 1}. strings s:${input.s} & t:${
				input.t
			} are anagram: ${isAnagram2(input.s, input.t)}`
		)
	)
})()
