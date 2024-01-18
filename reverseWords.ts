// question
// https://leetcode.com/problems/reverse-words-in-a-string/description/

const reverseWords = (s: string): string =>
	s
		.split(' ')
		.filter((item) => !!item)
		.reverse()
		.join(' ')

console.log('reverse of "the sky is blue" is', reverseWords('the sky is blue'))
console.log('reverse of "  hello world  " is', reverseWords('  hello world  '))
console.log(
	'reverse of "a good   example" is ',
	reverseWords('a good   example')
)
