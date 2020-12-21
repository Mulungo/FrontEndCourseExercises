function add(a, b) {
	return a + b;
}

function subtract(a, b) {
	return a - b;
}

function sum(args) {
	const reducer = (accumulator, currentValue) => accumulator + currentValue;
	return args.reduce((reducer), 0);
}

function multiply(args) {
	const reducer = (accumulator, currentValue) => accumulator * currentValue;
	return args.reduce((reducer), 1);
}

function power(a, b) {
	return a ** b;
}

function factorial(number) {
	if (number < 0) return;
	if (number < 2) return 1;
	return number * factorial(number - 1);
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
	power,
	factorial
}