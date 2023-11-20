// replicate the functionality of Promise.all()

const promiseAll = async (functions = []) => {
	let noOfResolved = 0
	const results = new Array(functions.length)
	return new Promise((resolve, reject) => {
		functions.forEach((func, index) =>
			func()
				.then((resp) => {
					results[index] = resp
					noOfResolved += 1
					noOfResolved === functions.length && resolve(results)
				})
				.catch(reject)
		)
	})
}

const log =
	(label = '') =>
	(...args) => {
		console.log(label, ...args)
	}

const input1 = [
	() => new Promise((resolve) => setTimeout(() => resolve(5), 200)),
]
const input2 = [
	() => new Promise((resolve) => setTimeout(() => resolve(1), 200)),
	() => new Promise((_, reject) => setTimeout(() => reject('Error'), 100)),
]
const input3 = [
	() => new Promise((resolve) => setTimeout(() => resolve(4), 50)),
	() => new Promise((resolve) => setTimeout(() => resolve(10), 150)),
	() => new Promise((resolve) => setTimeout(() => resolve(16), 100)),
]

promiseAll(input1).then(log('input 1 resp')).catch(log('input 1 error'))
promiseAll(input2).then(log('input 2 resp')).catch(log('input 2 error'))
promiseAll(input3).then(log('input 3 resp')).catch(log('input 3 error'))
