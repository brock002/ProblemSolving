// question
// https://leetcode.com/problems/asteroid-collision/description/
const asteroidCollision = (asteroids: number[]): number[] => {
	const stack: number[] = []

	for (let i = 0; i < asteroids.length; i++) {
		const top = stack.at(-1)
		const asteroid = asteroids[i]
		if (top === undefined || (asteroid < 0 && top < 0) || asteroid >= 0)
			stack.push(asteroid)
		else {
			if (Math.abs(top) < Math.abs(asteroid)) {
				stack.pop()
				i--
			} else if (Math.abs(top) === Math.abs(asteroid)) stack.pop()
		}
	}

	return stack
}

;(() => {
	const inputs = [
		[5, 10, -5],
		[8, -8],
		[10, 2, -5],
		[-2, -1, 1, 2],
	]
	inputs.forEach((input, index) =>
		console.log(
			`result array after all collision input ${
				index + 1
			} i.e. ${input} is ${asteroidCollision(input)}`
		)
	)
})()
