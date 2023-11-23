// question
// https://leetcode.com/problems/valid-palindrome/description/

const isPalindrome = (s = '') => {
	s = s.toLowerCase().replace(/[^0-9a-z]+/gi, '')
	for (let i = 0, j = s.length - 1; i < j; i++, j--)
		if (s.charAt(i) !== s.charAt(j)) return false
	return true
}

const input = 'A man, a plan, a canal: Panama'
console.log(`"${input}", is a palindrome..?`, isPalindrome(input))

const input2 = 'race a car'
console.log(`"${input2}", is a palindrome..?`, isPalindrome(input2))

const input3 = ' '
console.log(`"${input3}", is a palindrome..?`, isPalindrome(input3))
