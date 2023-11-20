// question
// https://leetcode.com/problems/search-insert-position/description/

var searchInsert = function (nums, target) {
	const currentMid = Math.floor(nums.length / 2)
	const currentMidItem = nums[currentMid]

	if (currentMidItem === target) return currentMid
	else if (target < currentMidItem) {
		const res = searchInsert(nums.slice(0, currentMid), target)
		if (Number.isInteger(res)) return res
		else return 0
	} else if (currentMidItem < target) {
		const res = searchInsert(
			nums.slice(currentMid + 1, nums.length),
			target
		)
		if (Number.isInteger(res)) return res + currentMid + 1
		else return currentMid + 1
	}
}

console.log('insert position result', searchInsert([1, 3, 5], 5))
