// question
// https://leetcode.com/problems/two-sum/description/

const twoSum = (nums, target) => {
	const visited = new Map()
	for (let i = 0; i < nums.length; i++) {
		const complement = target - nums[i]
		if (visited.has(complement)) return [visited.get(complement), i]
		else visited.set(nums[i], i)
	}
}

console.log('result', twoSum([3, 2, 4], 6))
