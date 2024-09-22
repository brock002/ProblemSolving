// question
// https://leetcode.com/problems/find-if-array-can-be-sorted/

const getNoOfSetBits = (n: number): number => n.toString(2).split('').reduce((p, c) => (p + Number(c)), 0)

const canSortArray = (nums: number[]): boolean => {
    let lowestOfCurrentSet = nums[0], highestOfCurrentSet = nums[0], highestOfPrevSet, prevSetBits = getNoOfSetBits(nums[0]), currentSetBits: number
    for (let i = 1; i < nums.length; i++) {
        currentSetBits = getNoOfSetBits(nums[i])
        if (prevSetBits === currentSetBits) {
            if (lowestOfCurrentSet > nums[i]) lowestOfCurrentSet = nums[i]
            if (highestOfCurrentSet < nums[i]) highestOfCurrentSet = nums[i]
        } else {
            if (!!highestOfPrevSet && lowestOfCurrentSet < highestOfPrevSet) return false
            highestOfPrevSet = highestOfCurrentSet
            lowestOfCurrentSet = nums[i]
            highestOfCurrentSet = nums[i]
        }
        prevSetBits = currentSetBits
    }
    if (!!highestOfPrevSet && lowestOfCurrentSet < highestOfPrevSet)
        return false
    else
        return true
};

; (() => {
    const inputs = [
        [1, 2, 3, 4, 5],
        [3, 16, 8, 4, 2],
        [8, 4, 2, 30, 15],
    ]
    inputs.forEach((input, index) =>
        console.log(
            `${index + 1
            }. Array ${input} is ${canSortArray(
                input
            ) ? 'sortable' : 'not sortable'}`
        )
    )
})()
