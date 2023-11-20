function climbingLeaderboard(ranked, player) {
	const result = []
	const uniqueRanks = []

	for (let i = 0; i < ranked.length; i++)
		if (uniqueRanks[uniqueRanks.length - 1] !== ranked[i])
			uniqueRanks.push(ranked[i])

	let i = 0,
		j = uniqueRanks.length - 1
	while (i < player.length) {
		console.log(i, player[i], j, uniqueRanks[j])
		if (j < 0) {
			result.push(1)
			i++
		} else if (player[i] === uniqueRanks[j]) {
			result.push(j + 1)
			i++
		} else if (player[i] < uniqueRanks[j]) {
			result.push(j + 2)
			i++
		} else if (player[i] > uniqueRanks[j]) j--
	}

	return result
}

const res = climbingLeaderboard(
	[100, 100, 50, 40, 40, 20, 10],
	[5, 25, 50, 120]
)
console.log('result', res)
