// question
// https://leetcode.com/problems/h-index/description/

const hIndex = (citations = []) => {
	citations.sort((a, b) => b - a)
	for (let i = 0; i < citations.length; i++) if (i >= citations[i]) return i
	return citations.length
}

const inputs = [[3, 0, 6, 1, 5], [1, 3, 1], [100], [1, 2, 100]]
inputs.forEach((input) => {
	console.log(`H-INDEX for citations ${input} is ${hIndex(input)}`)
})
