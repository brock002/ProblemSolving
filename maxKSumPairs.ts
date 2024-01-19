// question
// https://leetcode.com/problems/max-number-of-k-sum-pairs/description/

const maxOperations = (nums: number[], k: number): number => {
	const visitedItems = new Map<number, number>()
	let opsDone = 0

	for (let i = 0; i < nums.length; i++) {
		const remainder = k - nums[i]
		if (visitedItems.has(remainder)) {
			const elCount = visitedItems.get(remainder)
			if (elCount && elCount > 1) visitedItems.set(remainder, elCount - 1)
			else visitedItems.delete(remainder)
			opsDone++
		} else visitedItems.set(nums[i], (visitedItems.get(nums[i]) || 0) + 1)
	}

	return opsDone
}

;(() => {
	const inputs = [
		{ nums: [1, 2, 3, 4], k: 5 },
		{ nums: [3, 1, 3, 4, 3], k: 6 },
		{
			nums: [2, 5, 4, 4, 1, 3, 4, 4, 1, 4, 4, 1, 2, 1, 2, 2, 3, 2, 4, 2],
			k: 3,
		},
	]
	inputs.forEach((input, index) =>
		console.log(
			`max k-sum pairs possible for input ${index + 1} i.e. nums: ${
				input.nums
			} & k: ${input.k} is ${maxOperations(input.nums, input.k)}`
		)
	)
})()
