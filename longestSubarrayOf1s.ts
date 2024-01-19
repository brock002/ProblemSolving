// question
// https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/description/

const longestSubarray = (nums: number[]): number => {
	let startingIndex = -1,
		res = 0
	const subArrayIndexes: [number, number][] = []

	for (let i = 0; i < nums.length; i++) {
		if (nums[i] === 1) {
			if (startingIndex < 0) {
				startingIndex = i
				if (i === nums.length - 1) subArrayIndexes.push([i, i])
			} else {
				if (i === nums.length - 1)
					subArrayIndexes.push([startingIndex, i])
			}
		} else {
			if (startingIndex >= 0) {
				subArrayIndexes.push([startingIndex, i - 1])
				startingIndex = -1
			}
		}
	}

	for (let i = 0; i < subArrayIndexes.length; i++) {
		const element = subArrayIndexes[i]
		let currentLen = element[1] - element[0] + 1
		if (i < subArrayIndexes.length - 1) {
			const nextElement = subArrayIndexes[i + 1]
			if (element[1] + 2 === nextElement[0])
				currentLen = nextElement[1] - element[0]
		}
		res = res > currentLen ? res : currentLen
	}

	return res === nums.length ? res - 1 : res
}

// testing
const test = () => {
	const inputs = [
		[1, 1, 0, 1],
		[0, 1, 1, 1, 0, 1, 1, 0, 1],
		[1, 1, 1],
	]
	inputs.forEach((input, index) =>
		console.log(
			`longest subarray of 1's after deleting one 0 for input ${
				index + 1
			} i.e.`,
			input,
			'is',
			longestSubarray(input)
		)
	)
}
test()

// this is to prevent other files from taking this file variables as block scoped variables
// https://www.codingbeautydev.com/blog/typescript-cannot-redeclare-block-scoped-variable
export {}
