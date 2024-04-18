// question
// https://leetcode.com/problems/longest-increasing-subsequence/description/

const lengthOfLIS = (nums: number[]): number => {
	let result = 1,
		maxDistances: number[] = [1]

	for (let i = 1; i < nums.length; i++) {
		let currentMaxLen = 1
		for (let j = i - 1; j >= 0; j--) {
			if (nums[j] < nums[i]) {
				const newMaxLen = maxDistances[j] + 1
				currentMaxLen = Math.max(currentMaxLen, newMaxLen)
			}
		}
		result = Math.max(result, currentMaxLen)
		maxDistances.push(currentMaxLen)
	}

	return result
}

;(() => {
	const inputs = [
		[10, 9, 2, 5, 3, 7, 101, 18],
		[0, 1, 0, 3, 2, 3],
		[7, 7, 7, 7, 7, 7, 7],
		[3, 5, 6, 2, 5, 4, 19, 5, 6, 7, 12],
	]
	inputs.forEach((input, index) =>
		console.log(
			`${
				index + 1
			}. resultant longest increasing subsequence length for input ${input} is ${lengthOfLIS(
				input
			)}`
		)
	)
})()
