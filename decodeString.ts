// question
// https://leetcode.com/problems/decode-string/description/

const decodeString = (s: string): string => {
	// define a stack
	const stack: string[] = []

	// loop over the string
	for (let i = 0; i < s.length; i++) {
		const char = s.charAt(i)

		// if char is ] pop the stack items until you get [, else push char
		if (char === ']') {
			let s = '',
				top = stack.pop()

			// get repeatable string within brackets
			while (top !== '[') {
				s = top + s
				top = stack.pop()
			}

			// get repeat count
			let repeatCount = ''
			while (stack.length > 0 && !isNaN(Number(stack.at(-1)))) {
				top = stack.pop()
				repeatCount = top + repeatCount
			}

			// push the repeated string to stack
			stack.push(s.repeat(Number(repeatCount)))
		} else stack.push(char)
	}

	// return the final stack items joined together
	return stack.join('')
}

;(() => {
	const inputs = ['3[a]2[bc]', '3[a2[c]]', '2[abc]3[cd]ef', '100[leetcode]']
	inputs.forEach((input, index) =>
		console.log(
			`result decoded string for input ${
				index + 1
			} i.e. ${input} is ${decodeString(input)}`
		)
	)
})()
