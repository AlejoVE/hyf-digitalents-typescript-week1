const numberA = 3;
const numberB = 5;

const limit = 1000;

const getSum = (value1, value2, limit) => {
	const arr = [];

	for (let i = 1; i < limit; i++) {
		if (i % value1 === 0 || i % value2 === 0) {
			arr.push(i);
		}
	}

	console.log(arr.reduce((a, b) => a + b));
};

getSum(numberA, numberB, limit);
