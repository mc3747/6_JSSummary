function fib(num) {
	if (num === 0) return 0;
	if (num === 1) return 1;
	return fib(num - 2) + fib(num - 1);
}
console.log(fib(6));

function f1(num) {
	return num > 1 ?num *f1(num - 1) : 1;
}
console.log(f1(4));

