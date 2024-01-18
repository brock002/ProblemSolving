// question
// https://leetcode.com/problems/reverse-words-in-a-string/description/

const reverseWords = (s: string): string =>
	s
		.split(' ')
		.filter((item) => !!item)
		.reverse()
		.join(' ')

console.log('reverse of "the sky is blue"', reverseWords('the sky is blue'))
console.log('reverse of "  hello world  "', reverseWords('  hello world  '))
console.log('reverse of "a good   example"', reverseWords('a good   example'))
