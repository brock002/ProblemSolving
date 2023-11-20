// question
// https://leetcode.com/problems/minimum-path-sum/description/

const minPathSum = (grid) => {
	const m = grid.length
	const n = grid[0].length
	const indexWeight = new Map()

	const getIndexWeight = (i, j) => {
		const indexInString = `${i},${j}`
		if (indexWeight.has(indexInString))
			return indexWeight.get(indexInString)

		let res
		const currentWeight = grid[i][j]
		if (i === m - 1 && j === n - 1) {
			res = currentWeight
		} else {
			const rightWeight =
				j + 1 < n ? getIndexWeight(i, j + 1) : Number.MAX_SAFE_INTEGER
			const bottomWeight =
				i + 1 < m ? getIndexWeight(i + 1, j) : Number.MAX_SAFE_INTEGER
			res =
				currentWeight +
				(bottomWeight > rightWeight ? rightWeight : bottomWeight)
		}

		indexWeight.set(indexInString, res)
		return res
	}

	return getIndexWeight(0, 0)
}

const input = [
	[1, 3, 1],
	[1, 5, 1],
	[4, 2, 1],
]
const input2 = [
	[1, 2, 3],
	[4, 5, 6],
]
const input3 = [
	[3, 8, 6, 0, 5, 9, 9, 6, 3, 4, 0, 5, 7, 3, 9, 3],
	[0, 9, 2, 5, 5, 4, 9, 1, 4, 6, 9, 5, 6, 7, 3, 2],
	[8, 2, 2, 3, 3, 3, 1, 6, 9, 1, 1, 6, 6, 2, 1, 9],
	[1, 3, 6, 9, 9, 5, 0, 3, 4, 9, 1, 0, 9, 6, 2, 7],
	[8, 6, 2, 2, 1, 3, 0, 0, 7, 2, 7, 5, 4, 8, 4, 8],
	[4, 1, 9, 5, 8, 9, 9, 2, 0, 2, 5, 1, 8, 7, 0, 9],
	[6, 2, 1, 7, 8, 1, 8, 5, 5, 7, 0, 2, 5, 7, 2, 1],
	[8, 1, 7, 6, 2, 8, 1, 2, 2, 6, 4, 0, 5, 4, 1, 3],
	[9, 2, 1, 7, 6, 1, 4, 3, 8, 6, 5, 5, 3, 9, 7, 3],
	[0, 6, 0, 2, 4, 3, 7, 6, 1, 3, 8, 6, 9, 0, 0, 8],
	[4, 3, 7, 2, 4, 3, 6, 4, 0, 3, 9, 5, 3, 6, 9, 3],
	[2, 1, 8, 8, 4, 5, 6, 5, 8, 7, 3, 7, 7, 5, 8, 3],
	[0, 7, 6, 6, 1, 2, 0, 3, 5, 0, 8, 0, 8, 7, 4, 3],
	[0, 4, 3, 4, 9, 0, 1, 9, 7, 7, 8, 6, 4, 6, 9, 5],
	[6, 5, 1, 9, 9, 2, 2, 7, 4, 2, 7, 2, 2, 3, 7, 2],
	[7, 1, 9, 6, 1, 2, 7, 0, 9, 6, 6, 4, 4, 5, 1, 0],
	[3, 4, 9, 2, 8, 3, 1, 2, 6, 9, 7, 0, 2, 4, 2, 0],
	[5, 1, 8, 8, 4, 6, 8, 5, 2, 4, 1, 6, 2, 2, 9, 7],
]

console.log(minPathSum(input))
console.log(minPathSum(input2))
console.log(minPathSum(input3))
