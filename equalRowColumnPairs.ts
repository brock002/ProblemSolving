// question
// https://leetcode.com/problems/equal-row-and-column-pairs/description/

const equalPairs = (grid: number[][]): number => {
	let pairsCount = 0

	for (let i = 0; i < grid.length; i++)
		for (let j = 0; j < grid.length; j++)
			if (grid[i][0] === grid[0][j]) {
				let pairMatch = true
				for (let k = 1; k < grid.length; k++)
					if (grid[i][k] !== grid[k][j]) {
						pairMatch = false
						break
					}

				if (pairMatch) pairsCount++
			}

	return pairsCount
}

// testing
const inputs = [
	[
		[3, 2, 1],
		[1, 7, 6],
		[2, 7, 7],
	],
	[
		[3, 1, 2, 2],
		[1, 4, 4, 5],
		[2, 4, 2, 2],
		[2, 4, 2, 2],
	],
]
inputs.forEach((input, index) =>
	console.log(
		`pairs count for input ${index + 1} i.e.`,
		input,
		'is',
		equalPairs(input)
	)
)
