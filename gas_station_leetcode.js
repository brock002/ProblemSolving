// question
// https://leetcode.com/problems/gas-station/description/

const canCompleteCircuit = (gas, cost) => {
	let currentTankValue = 0,
		startIndex = 0
	for (let i = 0; i < gas.length; i++) {
		currentTankValue += gas[i]
		if (cost[i] > currentTankValue) {
			currentTankValue = 0
			if (startIndex > i) return -1
			else {
				startIndex = i + 1
				if (startIndex >= gas.length) return -1
			}
		} else {
			currentTankValue -= cost[i]
			if ((i + 1) % gas.length === startIndex) return startIndex
		}
		if (i === gas.length - 1) i = -1
	}
}

const gas = [5, 1, 2, 3, 4]
const cost = [4, 4, 1, 5, 1]

console.log(canCompleteCircuit(gas, cost))
